const router = require('express').Router()
const {
    addCtgr,
    getAllCtgr,
    editCtgr,
    deleteCtgr
} = require('./../2.controller').categoryController


router.get('/allCategory', getAllCtgr)
router.post('/addCategory', addCtgr)
router.put('/editCategory/:id', editCtgr)
router.delete('/delCategory/:id', deleteCtgr)

module.exports = router
