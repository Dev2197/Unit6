const express = require('express')
const Product = require('../models/productModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const products = await Produt.find().lean().exec();
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

router.post("/create", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(req.params.id,req.body, {new:true});
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;