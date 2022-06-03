const express = require('express')

const {register,login} = require('./controllers/userController')
const tweetController = require('./controllers/tweetController')

const app = express()

app.use(express.json())

app.post('/register',register)
app.post('/login',login)

app.use('/tweet', tweetController)

module.exports = app;