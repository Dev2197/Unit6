const express = require('express')
const Tweets = require('../models/tweetModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const tweets = await Tweets.find().lean().exec();
        return res.status(200).send(tweets);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const tweet = await Tweets.create(req.body);
        return res.status(201).send(tweet);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tweet = await Tweets.find(req.params.id).lean().exec();
        return res.status(200).send(tweet);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const tweet = await Post.findByIdAndDelete(req.params.id);
        return res.status(201).send(tweet);
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router;