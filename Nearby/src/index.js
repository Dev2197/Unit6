const express = require('express')

const restaurant = require('./controllers/restaurantsController')
const neighbourhood = require('./controllers/neighbourhoodController')

const app = express();

app.use(express.json())

app.use('/restaurant', restaurant)
app.use('/neighbourhood', neighbourhood)

module.exports = app;