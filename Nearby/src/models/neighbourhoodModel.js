const mongoose = require('mongoose')

const neighbourhoodSchema = new mongoose.Schema({
    geometry:{
        type:{
            type:String,default:"Polygon",required:true
        },
        coordinates:{type:[[Number]], required:true}
    },
    name:{type:String, required:true}
})

module.exports = mongoose.model('neighbourhood',neighbourhoodSchema)