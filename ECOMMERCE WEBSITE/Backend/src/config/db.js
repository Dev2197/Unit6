const mongoose = require('mongoose')

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Dev:EcommercePassword@cluster0.azp0olr.mongodb.net/?retryWrites=true&w=majority")
}