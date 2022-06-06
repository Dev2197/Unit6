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
router.get("/:brand",async(req,res)=>{
    try {
        const mensdata = await Mensdata.find().lean().exec()
        // console.log(mensdata)

        const result = mensdata.filter(data=> data.Brand== req.params.brand)
        
        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

router.get("/filterandsort/:id",async(req,res)=>{
    try {
        const mensdata = await Mensdata.find().lean().exec()
        let d = req.params.id.split("&")

        const result = mensdata.filter(data=> data.Brand== d[0])
        
        if(d[1] == "asc")
        {
            result.sort((a,b)=>{
                return a.price-b.price
            })

            return res.status(200).send(result)
        }
        else if(d[1] == "desc")
        {
            result.sort((a,b)=>{
                return b.price-a.price
            })

            return res.status(200).send(result)
        }
        
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;