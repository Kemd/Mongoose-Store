// === Dependencies ===
require('dotenv').config()
const express = require('express')
const Product = require('./models/products')
const mongoose = require('mongoose')
const req = require('express/lib/request')

const app = express()

// === Mongoose database connection ===
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// === Database connection Callback functions for error or success ===
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.on('connected', () => console.log('Mongodb is connected'))
db.on('disconnected', () => console.log('Mongodb is disconnected'))

// === MiddleWare, enables req.body === 
app.use(express.urlencoded({ extended: false}))




// === ROUTES start ===

// === INDEX ===
// === New ===
// === Delete ===
// === Update ===
// === Create ===
// === Edit ===
// === Show ===


// === ROUTES end ===



// === listener === 
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
