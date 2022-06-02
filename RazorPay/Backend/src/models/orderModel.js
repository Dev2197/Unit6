const mongoose = require('mongoose')
const shortid = require('shortid');
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({
    amount : {type:Number, required:true},
    isPaid : {type:Boolean},
    orderId: {type:String, required:true, default:shortid.generate},
    paymentId : {type:String, required:true, default:uuidv4()}
})

module.exports = mongoose.model('razorpay', orderSchema)
