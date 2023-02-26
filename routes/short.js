const shortroute = require("express").Router();

shortroute.get('/', (req, res) => {
    res.render("index.ejs")
})

shortroute.post('/', (req, res) => {
    const {longurl, shorturl} = req.body;

    
})

module.exports = shortroute