require('dotenv').config()

const express = require('express');
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

//listen to requests

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
})