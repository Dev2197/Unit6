const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    // userID: {type:mongoose.Schema.Types.ObjectId, ref:"UserData"},
    doorNo : {type:String, required:true},
    street : {type:String, required:true},
    city: {type:String, required:true},
    state: {type:String, required:true},
    country: {type:String, required:true},
    pincode: {type:Number, required:true}
})

module.exports = mongoose.model("Addresses", addressSchema)