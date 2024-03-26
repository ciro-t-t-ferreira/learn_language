require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/vocabulary')

const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/vocabulary', routes)

//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen to requests
        app.listen(process.env.PORT, () => {
        console.log('Connected to Db and Listening on port ' + process.env.PORT)})
    })
    .catch((error) => {
        console.log(error)
    })
