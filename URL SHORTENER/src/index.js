const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const db = require("./config/db")
const Shorturl = require('./models/url')

const app = express()
// app.use(express.json());
app.use(express.urlencoded({extended:false}))

// mongoose.connect("mongodb://127.0.0.1:27017/urlShortner",{
//     useNewUrlParser:true, useUnifiedTopology:true
// })

app.set('view engine', 'ejs')

app.get('/',async (req,res)=>{

    const urls = await Shorturl.find()
    res.render('index', {urls:urls})
})

app.post('/short',async (req,res)=>{

    await Shorturl.create({full:req.body.longUrl})

    res.redirect('/')
})

app.get('/:shortURL', async (req,res)=>{
    const shorturl = await Shorturl.findOne(({short:req.params.shortURL}))
    console.log(shorturl)

    res.redirect(shorturl.full)
})
const PORT = process.env.PORT || 5000 
app.listen(PORT,async ()=>{
    await db()
    console.log("Listening on Port 5000")
})

// app.listen(process.env.PORT || 5000)