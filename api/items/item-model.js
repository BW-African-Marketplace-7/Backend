const db = require('../data/db-config')

module.exports = {
    findAll,
    add,
    update,
    findById,
    remove
}

function findAll() {
    return db('items')
}

function findById(id) {
    return db('items').where('item_id', id).first()
}

async function add(item) {
    return db('items')
        .insert(item, 'item_id')
        .then(([id])=> {
            return findById(id)
        })
}

async function update(id, newItem) {
    return db('items').where('item_id', id).update(newItem)
}

async function remove(id) {
    const removed = await db('items').where('item_id', id).first()
    await db('items').del().where('item_id', id)
    return removed
}