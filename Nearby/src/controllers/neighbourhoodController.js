const express = require('express')
const Neighbourhood = require('../models/neighbourhoodModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const Neighbours = await Neighbourhood.find().lean().exec();
        return res.status(200).send(Neighbours);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const Neighbour = await Neighbourhood.create(req.body);
        return res.status(201).send(Neighbour);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.get('/:id', async(req,res)=>{
    try {
        const Neighbour = await Neighbourhood.findOne(req.params.id).lean().exec()
        return res.status(200).send(Neighbour)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router;