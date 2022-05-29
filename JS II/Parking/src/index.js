const express = require('express')

const parkingSpot = require('./controllers/parkingSpotController')
const parkingTicket = require('./controllers/parkingTicketController')

const app = express()
app.use(express.json())

app.use('/parkingSpot',parkingSpot)
app.use('/parkingTicket',parkingTicket)
module.exports = app;