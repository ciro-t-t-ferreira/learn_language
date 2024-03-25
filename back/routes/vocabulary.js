const express = require('express')

const router = express.Router()

//GET all entries from given language
router.get('/:language/', (req,res) => {
    res.json({mssg:'GET all words'})
})

//GET single entry from given language
router.get('/:language/:id', (req, res) => {
    res.json({mssg:'GET single words'})
})

//POST an entry for a given language
router.post('/:language/', (req, res) => {
    res.json({mssg:'POST a word'})
})

//DELETE an entry for a given language
router.delete('/:language/:id', (req, res) => {
    res.json({mssg:'DELETE WORD'})
})

//UPDATE an entry for a given language
router.put('/:language/:id', (req, res) => {
    res.json({mssg:'UPDATE WORD'})
})

module.exports = router