const express = require('express')
// const Razorpay = require('razorpay');

const Order = require('../models/orderModel')
const router = express.Router()


// const RAZORPAY_KEY_ID= "rzp_test_VylokSbwRrBULv"
// const RAZORPAY_SECRET= "tUQZYwXaHtGgLACwsXsAwbQY"

// router.post('/createOrder', async(req,res)=>{
//     try {
//         var instance = new Razorpay({
//             key_id: RAZORPAY_KEY_ID,
//             key_secret: RAZORPAY_SECRET,
//           });

//           const order = await instance.Order.create(req.body.amount)

//           res.status(200).send(order)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

router.post('/payOrder', async(req,res)=>{
    try {
        const payorder = await Order.create(req.body)

        await payorder.save();
        res.send("Payment Was Successful")
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/listOrders', async(req,res)=>{
    try {
        const orders = await Order.find().lean().exec()

        res.send(orders)
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;