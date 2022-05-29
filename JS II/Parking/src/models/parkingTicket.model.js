const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
   vehicleNo : {type:String, required:true},
   date: {type:Date, required:true},
   price : {type:Number, required:true},
   parkingSpot: { type: mongoose.Schema.Types.ObjectId, ref: "parkingSpot", required: true },
})

module.exports = mongoose.model("ParkingTicket", ticketSchema)