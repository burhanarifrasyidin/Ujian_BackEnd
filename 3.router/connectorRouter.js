const router = require('express').Router()
const {
    getConData,addCon,delCon
} = require('./../2.controller').connectController


router.get('/allConnect', getConData)
router.post('/addCon', addCon)
router.delete('/delCon/:id', delCon)


module.exports = router

