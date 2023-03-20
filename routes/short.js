const shortroute = require("express").Router();
const shorturlmodel = require("../models/url")

shortroute.get('/', async (req, res) => {
    urlDetail = {}
    check = false
    res.render('index.ejs', {
        urlDetail,
        check
    })
})

shortroute.post('/', async (req, res) => {
    const {fullurl, shorturl} = req.body;

    await shorturlmodel.create({fullurl, shorturl})

    urlDetail = await shorturlmodel.findOne({shorturl})
    res.render('index', {
        urlDetail,
        check: true
    })
    
})

shortroute.get('/:shorturl', async (req, res) => {
    const url = await shorturlmodel.findOne({short: req.params.shorturl})

    if (!url) return res.status(404);
    res.redirect(url.fullurl)
})

module.exports = shortroute