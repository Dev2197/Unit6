const express = require('express')
var cors = require('cors')

const productController = require("./controllers/productController")
const userController = require("./controllers/userController")
const orderController = require('./controllers/orderController')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/products',productController)
app.use('/user',userController)
app.use('/order',orderController)

module.exports = app;