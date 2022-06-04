const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name:{type:String, required:true},
    location: { type: { type: String, default:'Point' }, coordinates: [Number] },
    category:{type:String, required:true}
})

module.exports = mongoose.model('restaurants',restaurantSchema)