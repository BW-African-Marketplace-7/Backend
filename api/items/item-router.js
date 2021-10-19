const express = require('express')
const router = express.Router()
const Items = require('./item-model')

router.get('/', (req, res, next) => {
    Items.findAll()
        .then(items => {
            res.status(200).json(items)
        }).catch(next)
})

router.post('/', (req, res, next) => {
    const newItem = req.body
    Items.add(newItem)
        .then(item => {
            res.status(200).json({
                message: `You have successfully created a new item: ${item.name}`,
                item
            })
        }).catch(next)
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    Items.update(id, changes)
        .then(change => {
            if (change === 1) {
                Items.findById(id)
                    .then(item => {
                        res.status(200).json({
                            message: `Item ${item.name} has been updated`,
                            item
                        })
                    }).catch(next)
            }
        }).catch(next)
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Items.remove(req.params.id).then(item => {
            res.status(202).json({
                message: `You have successfully removed item ${item.name}`,
                item
            })
        }) 
        }catch (err) {
            next()
    }
})

module.exports = router