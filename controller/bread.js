const router = require('express').Router()
const Bread = require('../models/bread')

//get all breads
router.get('/', (req,res) => {
    res.render('index', {
        breads: Bread
    })
    
})
router.get('/new', (req,res) => {
    res.render('new')
})

//get bread a specific bread by index
router.get('/:index', (req, res) => {
    const {  index } = req.params
    res.render('show', {
        bread: Bread[index],
        index
    })
})
router.get('/:index/edit', (req, res) => {
    const {  index } = req.params
    res.render('edit', {
        bread: Bread[index],
        index
    })
})

router.post('/', (req,res) => {
    if (!req.body.image) req.body.image ='https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
    if (req.body.hasGluten  === "on"){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    Bread.push(req.body)
    res.status(303).redirect('./breads')
})
router.delete('/:index', (req, res) => {
    const { index } = req.params
    Bread.splice(index, 1)
    res.status(303).redirect('/breads')
})
router.put('/:index', (req, res) => {
    const { index } = req.params
    if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'

    if (req.body.hasGluten ==='on') {
        req.body.hasGluten = true
     }  else{
        req.body.hasGluten = false
     }

     Bread[index] = req.body
     res.status(303).redirect(`/breads/${index}`)

})

module.exports = router