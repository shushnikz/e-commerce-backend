const express = require("express");
const router = express.Router();
const User = require('../models/userModel')

router.post("/register", async (req, res) => {

    try {
        const newuser = await User(req.body)
        const user = await newuser.save()
        res.send("User Created Successfully")
    } catch (error) {
        return res.status(400).json(error)
    }

})

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            res.send(user)
        }
        else {
            return res.status(400).json({ message: "invalid credential" })
        }
    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router;