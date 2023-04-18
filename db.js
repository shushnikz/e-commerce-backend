const mongoose = require("mongoose");

const URL = "mongodb+srv://e-commerce-user:Shush129@cluster0.4ismyhv.mongodb.net/mern-ecommerce"

mongoose.set('strictQuery', true);

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })

const connection = mongoose.connection

connection.on("connected", () => {
    console.log("MongoDB connected successfully")
})

connection.on("error", (error) => {
    console.log(error)
})