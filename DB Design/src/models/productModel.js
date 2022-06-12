const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {type:String, required:true},
    color: {type:String, required:true},
    image : {type:String, required:true},
    price: {type:Number, required:true},
    quantity: {type:Number, required:true},
    brand: {type:mongoose.Schema.Types.ObjectId, ref:"Brands", required:true}
})

module.exports = mongoose.model("Products", productSchema)