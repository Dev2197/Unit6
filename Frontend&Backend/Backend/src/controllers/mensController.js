const express=require("express");

const Mensdata = require('../models/mensModel')

const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        const mensdatas=await Mensdata.find().lean().exec();
        return res.status(200).send(mensdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/asc",async(req,res)=>{
    try {
        const mensdata = await Mensdata.find().lean().exec()

        mensdata.sort((a,b)=>{
            return a.price-b.price
        })

        return res.status(200).send(mensdata)
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

router.get("/desc",async(req,res)=>{
    try {
        const mensdata = await Mensdata.find().lean().exec()

        mensdata.sort((a,b)=>{
            return b.price-a.price
        })

        return res.status(200).send(mensdata)
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;