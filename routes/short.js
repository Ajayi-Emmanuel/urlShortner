const shortroute = require("express").Router();
const shorturlmodel = require("../models/url")

shortroute.get('/', async (req, res) => {
    const short = req.body.shorturl;
    const shortfound = await shorturlmodel.findOne(short)

    if(!shortfound){
        res.json({
            message: "Not found in the database"
        })
    }
    res.render('index.ejs', {
        shorturl: shortfound
    })
})

shortroute.post('/', async (req, res) => {
    const {fullurl, shorturl} = req.body;

    await shorturlmodel.create({fullurl, shorturl})
    res.redirect("/")
    
})

shortroute.get('/:shorturl', async (req, res) => {
    const shorturl = await shorturlmodel.findOne({short: req.params.shorturl})

    if (!shorturl) return res.status(404);
    res.redirect(shorturl.fullurl)
})

// shortroute.post()

module.exports = shortroute