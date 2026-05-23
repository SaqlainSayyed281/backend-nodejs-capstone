const express = require("express")
const router =  express.Router()

const {
    Register
}=require("../Controller/Auth")


router.post("/register" , Register)

module.exports = router