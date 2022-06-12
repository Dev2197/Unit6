const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true},
    mobileNo: {type:Number, required:true},
    addresses : [{type:mongoose.Schema.Types.ObjectId, ref:"Addresses"}]
})

module.exports = mongoose.model("UsersData", userSchema)