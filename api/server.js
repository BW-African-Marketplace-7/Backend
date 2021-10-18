const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { restricted } = require('./auth/auth-middleware')

const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');
const itemRouter = require('./items/item-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users', restricted, userRouter)
server.use('/api/auth', authRouter)
server.use('/api/items', restricted, itemRouter)

server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

//const db = require('./data/db-config')

//function getAllUsers() { return db('users') }

//async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
//  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
//}


// server.get('/api/users', async (req, res) => {
//   res.json(await getAllUsers())
// })

// server.post('/api/users', async (req, res) => {
//   res.status(201).json(await insertUser(req.body))
// })

module.exports = server
