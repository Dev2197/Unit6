const express = require('express')

const router = express.Router()
const ParkingSpot = require('../models/parkingSpotmodel')

router.get("/", async (req, res) => {
    try {
        const parkingsSpots = await ParkingSpot.find().lean().exec();
        return res.status(200).send(parkingsSpots);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const parking = await ParkingSpot.create(req.body);
        return res.status(200).send(parking);
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = router;