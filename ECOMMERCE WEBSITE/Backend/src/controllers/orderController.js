const express = require('express')
const Order = require('../models/orderModel')
const authenticate = require('../middlewares/authentication');
const authorise = require('../middlewares/authorise');
const Product = require('../models/productModel')

const router = express.Router()

async function updateStock(id, quantity) {
    const product = await Product.findById(id);
  
    product.stock -= quantity;
  
    await product.save();
  }

router.post("/create",authenticate,async(req,res)=>{
    try {
        const {
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
          } = req.body;
        
          const order = await Order.create({
            shippingInfo,
            orderItems,
            paymentInfo,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            paidAt: Date.now(),
            user: req.user._id,
          });

          return res.status(201).send(order)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})

router.get('/:id',authenticate,async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
          );
        
        return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})

router.get('/',authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try {
        const order = await Order.find().populate(
            "user",
            "name email"
          );
        
        return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})

router.patch('/updateOrder/:id',authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);

  if (order.orderStatus === "Delivered") {
    return res.status(400).send("You have already delivered this order")
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save();
  return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})


router.delete('/delete/:id',authenticate,authorise(["admin","seller"]),async(req,res)=>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id)

        return res.status(200).send(order)
    } catch (error) {
        return res.status(500).send({ "error": error.message });
    }
})
module.exports = router;