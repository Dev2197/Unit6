const express = require('express')
const User = require('../models/userModel')
const Addresses = require('../models/addressModel')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        .populate({path:"addresses", select:["doorNo","street","city","state","coutry","pincode"]})
        .lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.post('/create', async (req, res) => {
    try{
        const user = await User.create(req.body);
        return res.status(200).send(user);
     }catch(err){
         return res.status(400).send({error: err.message});
     }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.get("/:id/addresses", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec()
        // const address = await Addresses.findById(user.addresses)
        let addresses = []
        for(let i=0; i<user.addresses.length; i++)
        {
            addresses.push(await Addresses.findById(user.addresses[i]))
        }

        return res.status(200).send(addresses)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.post("/:id/addresses/create", async (req, res) => {
    try {
        const address = await Addresses.create(req.body)
        // console.log(address);
        
        const user=await User.findByIdAndUpdate(req.params.id,{$push: { addresses: address }}, {new:true})

        return res.status(200).send({ "Address": address ,"user":user});
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

router.patch("/:id/address/:idx/edit", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        // console.log(user)

        for(let i=0; i<user.addresses.length; i++)
        {
            if(await Addresses.findById(req.params.idx))
            {
                const updateAddress = await Addresses.findByIdAndUpdate(req.params.idx, req.body, {new:true})

                return res.status(200).send(updateAddress);
            }
        }
        return res.status(200).send(updateAddress);
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
});

module.exports = router