const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName : {type:String, required:true},
    brand: {type:mongoose.Schema.Types.ObjectId, ref:"Brands"},
    category:{type:String, required:true},
    color: {type:String, required:true},
    image : [{type:String, required:true}],
    price: {type:Number, required:true},
    quantity: {type:Number, required:true},
    rating:{type:Number, default:0},
    stock: {type:Number, required:true, default:1},
    numOfReviews: {type:Number, default:0},
    reviews:[{
        name:{type:String, required:true},
        rating:{type:Number, required:true},
        comment:{type:String}
    }]
    
},{
    timestamps:true,
    versionKey:false
})

module.exports = mongoose.model("Products", productSchema)