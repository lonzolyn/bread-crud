const router = require('express').Router()
const Bread = require('../models/bread')

//get all breads
router.get('/', (req,res) => {
    res.render('index', {
        breads: Bread
    })
    
})

//get bread a specific bread by index
router.get(':index', (req, res) => {
    const {  index } = req.params
    res.send(Bread[index])
})

module.exports = router