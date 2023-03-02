const mongoose = require("mongoose")

const shorturlSchema = new mongoose.Schema({
    fullurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('url', shorturlSchema)