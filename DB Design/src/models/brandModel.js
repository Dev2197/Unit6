const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    brandName : {type:String, required:true},
    productsId: { type: mongoose.Schema.Types.ObjectId, ref: "Product"}
})

module.exports = mongoose.model("Brands", brandSchema)