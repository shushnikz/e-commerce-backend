const express = require("express");
const router = express.Router();
const Product = require('../models/productModel')

router.get("/getallproducts", async (req, res) => {

    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        return res.status(400).json({ message: error })
    }

});

router.post("/getproductbyid", async (req, res) => {

    const id = req.body.id
    try {
        const product = await Product.findOne({ _id: id })
        res.send(product)
    } catch (error) {
        return res.status(400).json({ message: error })
    }

});

module.exports = router;