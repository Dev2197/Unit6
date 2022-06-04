const express = require('express')

const Restaurants = require('../models/restaurantsModel')

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurants.find().lean().exec();
        return res.status(200).send(restaurants);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const restaurant = await Restaurants.create(req.body);
        return res.status(201).send(restaurant);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router;