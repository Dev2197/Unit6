const mongoose = require('mongoose')
const shortid = require('shortid')

const shortURLSchema = new mongoose.Schema({
    full:{type:String, required:true},
    short :{type:String, required:true, default:shortid.generate}
})

module.exports = mongoose.model('Shorturl',shortURLSchema)
