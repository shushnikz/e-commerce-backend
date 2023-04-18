const express = require("express")

const app = express()

app.use(express.json())

const db = require("./db")

const productsRoute = require("./routes/productsRoute")
const userRoute = require("./routes/userRoute")

app.get("/", (req, res) => {
    res.send("E commerce backend")
})

app.use("/api/products", productsRoute)
app.use("/api/users", userRoute)

const PORT = 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`))