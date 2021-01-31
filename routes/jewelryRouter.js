const express = require("express")
const jewelryRouter = express.Router()
const Jewelry = require("../models/jewelry.js")

// get all jewelry
jewelryRouter.get("/", (req, res, next) => {
    Jewelry.find((err, jewelries) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jewelries)
    })
})

module.exports = jewelryRouter