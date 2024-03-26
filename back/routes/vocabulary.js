const express = require('express')
const {
    getAllEntries,
    getSingleEntry,
    createEntry,
    deleteEntry,
    updateEntry
} = require('../controllers/vocabularyController')

const router = express.Router()

//GET all entries from given language
router.get('/:language/', getAllEntries)

//GET single entry from given language
router.get('/:language/:id', getSingleEntry)

//POST an entry for a given language
router.post('/:language/', createEntry)

//DELETE an entry for a given language
router.delete('/:language/:id', deleteEntry)

//UPDATE an entry for a given language
router.put('/:language/:id', updateEntry)

module.exports = router