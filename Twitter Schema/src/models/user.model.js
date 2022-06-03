const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : {type:String, required:true},
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobileNo: { type: Number, required: false },
    profileImage:{type: String, required: false},
    joinedDate:{type:Date,default:Date.now},
    followers: { type: Number, required: false, default: 0 },
    following: { type: Number, required: false, default: 0 }
})

module.exports = mongoose.model('twitterUser', userSchema)