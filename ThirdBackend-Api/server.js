const express = require("express")
const app = express()
const connectDB = require("./config/mongo")
const AuthRoutes = require("./Routes/AuthRoutes")


app.use(express.json())

app.use("/api" , AuthRoutes)

app.listen(5000, () =>{
    console.log("server Running")
})