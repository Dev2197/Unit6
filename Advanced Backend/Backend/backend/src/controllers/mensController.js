const express=require("express");

const Mensdata = require('../models/mensModel')

const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        const total = await Mensdata.countDocuments({})
        const page = parseInt(req.query.page || 0)
        // console.log(req.query.page)
        const page_size = 13;
        const mensdatas=await Mensdata.find().limit(page_size).skip(page*page_size).lean().exec();
        // console.log(mensdatas)
        
        return res.status(200).send({mensdatas,totalPages:Math.ceil(total/page_size)})
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/asc",async(req,res)=>{
    try {
        const total = await Mensdata.countDocuments({})
        const page = parseInt(req.query.page || 0)
        const page_size = 13;
        const mensdata=await Mensdata.find().limit(page_size).skip(page*page_size).lean().exec();

        mensdata.sort((a,b)=>{
            return a.price-b.price
        })
        
        return res.status(200).send({mensdata,totalPages:Math.ceil(total/page_size)})
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

router.get("/desc",async(req,res)=>{
    try {
        const total = await Mensdata.countDocuments({})
        const page = parseInt(req.query.page || 0)
        const page_size = 13;
        const mensdata=await Mensdata.find().limit(page_size).skip(page*page_size).lean().exec();

        mensdata.sort((a,b)=>{
            return b.price-a.price
        })
        
        return res.status(200).send({mensdata,totalPages:Math.ceil(total/page_size)})
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

router.get("/category/:id",async (req,res)=>{
    try {
        const mensdata = await Mensdata.find().lean().exec()
        // console.log(mensdata)

        const result = mensdata.filter(data=> data.itemCategory== req.params.id)
        
        return res.status(200).send(result)
    } catch (error) {
        return res.status(400).send(err.message);
    }
})

module.exports = router;