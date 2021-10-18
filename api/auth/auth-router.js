const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')
const { buildToken } = require('./token-builder')
const { checkCredentials, checkNameExist } = require('../users/usermiddleware')

router.post('/register', checkCredentials, checkNameExist, (req, res, next) => {
    const { name, email, username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    Users.insertUser({ name, email, username, password: hash })
        .then((newUser) => {
            res.status(201).json(newUser)
        }).catch(next)
})

router.post('/login', (req, res) => {
    let { username, password } = req.body
    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = buildToken(user)
                res.status(200).json({
                    user_id: user.user_id,
                    message: `Welcome, ${username}`,
                    token: token,
                })
            } else {
                res.status(401).json({ message: 'invalid credentials' })
            }
        }).catch((err)=> {
            res.status(500).json(err.message)
        })
})

module.exports = router