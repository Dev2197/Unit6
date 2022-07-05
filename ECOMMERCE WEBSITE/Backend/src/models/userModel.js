const mongoose = require('mongoose')
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email : {type : String, required : true, unique:true},
    password : {type : String, required : true},
    mobileNo: {type:Number, required:true},
    role : {type : String, default:"user"},
    avatar:{type:String},
    addresses : [{type:mongoose.Schema.Types.ObjectId, ref:"Addresses"}]
},{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", userSchema)