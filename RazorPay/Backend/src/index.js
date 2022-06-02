const express = require('express')

const app = express();

const orderController = require('./controllers/oderController')

app.use(express.json())

app.use('/', orderController)

module.exports = app;