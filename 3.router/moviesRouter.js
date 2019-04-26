const router = require('express').Router()
const {
    addData,
    getAllData,
    editData,
    deleteData
} = require('./../2.controller').movieController


router.get('/allMovie', getAllData)
router.post('/addMovie', addData)
router.put('/editMovie/:id', editData)
router.delete('/delMovie/:id', deleteData)

module.exports = router
