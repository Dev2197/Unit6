const express = require("express");
const router = express.Router();
const ParkingTicket = require('../models/parkingTicket.model')

router.get("/", async (req, res) => {
    try {
        const tickets = await ParkingTicket.find().lean().exec();
        return res.status(200).send(tickets);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const ticket = await ParkingTicket.create(req.body);
        return res.status(200).send(ticket);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

module.exports = router;