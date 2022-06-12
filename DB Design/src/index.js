const express = require('express')

const userController = require('./controllers/userController')
const brandController = require('./controllers/brandController')
const productController = require('./controllers/productController')

const app = express()

app.use(express.json())

app.use('/users', userController)
app.use('/brands', brandController)
app.use('/priducts', productController)

module.exports = app;