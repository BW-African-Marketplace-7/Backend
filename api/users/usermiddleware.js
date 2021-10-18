const { getAllUsers } = require('./users-model')

const checkCredentials = (req, res, next) => {
    try {
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.username ||
            !req.body.password
        ) {
            next ({ message: 'all fields are required' })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

const checkNameExist = async (req, res, next) => {
    try {
        const [user] = await getAllUsers({ username: req.body.username })
        if (user) {
            next({ message: 'username taken' })
        } else { next() }
    } catch(err) {next(err)}
}

const checkUsernameInDb = async (req, res, next) => {
    try {
        const [user] = await getAllUsers({ username: req.body.username })
        if (!user) {
            next({ message: "invalid credentials" })
        } else {
            req.user= user
            next()
        }
    } catch(err) {next(err)}
}

module.exports = {
    checkCredentials,
    checkNameExist,
    checkUsernameInDb
}