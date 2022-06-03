const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    text: {type: String, required: true},
    tweetDate: {type:Date,default:Date.now},
    likes: { type: Number, required: false, default: 0 },
    comments:{type:Number,required:false,default:0},
    retweets: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
})

module.exports = mongoose.model('tweets', tweetSchema)