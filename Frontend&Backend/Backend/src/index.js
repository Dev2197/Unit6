const express = require('express')
var cors = require('cors')

const mensController = require('./controllers/mensController')

const app = express()

app.use(express.json())

app.use(cors())

app.use('/mensdata', mensController)
app.use('/mensdata',mensController)
app.use('/mensdata',mensController)

module.exports = app;