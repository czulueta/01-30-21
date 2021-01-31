const mongoose = require("mongoose")
const Schema = mongoose.Schema

const jewelrySchema = new Schema({
    necklace: {
        type: String,
    },
    ring: {
        type: String,
    },
    earrings: {
        type: String,
    }
})

module.exports = mongoose.model("Jewelry", jewelrySchema)