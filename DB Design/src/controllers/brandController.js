const express = require('express')
const Brand = require('../models/brandModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const brand = await Brand.find().lean().exec();
        return res.status(200).send(brand);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id).lean().exec();
        return res.status(200).send(brand);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/create", async (req, res) => {
    try {
        const brand = await Brand.create(req.body);
        return res.status(201).send(brand);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id,req.body);
        return res.status(203).send(brand);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router;