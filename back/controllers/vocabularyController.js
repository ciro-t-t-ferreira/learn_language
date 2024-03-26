const express = require('express')
const { Router } = require('express');
const mongoose = require('mongoose');
const Entry = require('../models/entryModel')
 

const router = express.Router();

//GET all entrys from given language
const getAllEntries = async (req, res) => {
    const { language } = req.params
    const entries = await Entry.find({language: language}).sort({createdAt: -1})
  
    res.status(200).json(entries)
}

//GET single entry from given language
const getSingleEntry = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'Could not find this word'})
    }
  
    const entry = await Entry.findById(id)
  
    if (!entry) {
      return res.status(404).json({error: 'Could not find this word'})
    }
  
    res.status(200).json(entry)
}

//POST a entry from a given language
const createEntry = async (req,res) => {
    const { language } = req.params
    const { word, apiTranslation, userTranslation, annotations } = req.body 
    try{
        const entry = await Entry.create({ language, word, apiTranslation, userTranslation, annotations })
        res.status(200).json(entry)

    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//DELETE a entry
const deleteEntry = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'Word not found'})
    }
  
    const entry = await Entry.findOneAndDelete({_id: id})
  
    if(!entry) {
      return res.status(400).json({error: 'Word not found'})
    }
  
    res.status(200).json(entry)
}

//UPDATE a entry from a given language
const updateEntry = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'Word not found'})
    }
  
    const entry = await Entry.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!entry) {
      return res.status(400).json({error: 'Word not found'})
    }
  
    res.status(200).json(entry)
}

module.exports = {
    getAllEntries,
    getSingleEntry,
    createEntry,
    deleteEntry,
    updateEntry
}