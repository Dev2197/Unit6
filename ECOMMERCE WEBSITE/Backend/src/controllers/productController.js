const express = require('express');
const authenticate = require('../middlewares/authentication');
const authorise = require('../middlewares/authorise');
const Product = require('../models/productModel')


const router = express.Router()


//Get all Products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().lean().exec();
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

//create Product -Admin
router.post("/create",authenticate,authorise(["admin","seller"]), async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

//update Product --- admin
router.patch("/:id/edit",authenticate,authorise(["admin","seller"]),async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.delete("/:id", authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.status(200).send({"message":"Product Deleted Successfully"})
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})

module.exports = router;