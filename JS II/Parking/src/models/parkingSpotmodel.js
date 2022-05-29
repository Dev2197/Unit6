const mongoose = require('mongoose')

const parkingSpotSchema = new mongoose.Schema({
    floorNo: { type: Number, required: true },
    slot: { type: Number, required: true, unique: true },  
});

module.exports = mongoose.model("parkingSpot", parkingSpotSchema)