// === Dependencies ===
require('dotenv').config()
const express = require('express')
const Product = require('./models/products.js')
// === seed data for testing, delete after === 
const productSeed = require('./models/productSeed')
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
app.use(express.urlencoded({
    extended: false
}))


// === ROUTES start ===

// Routes / Controllers
// Seed for testing - delete later

// Routes / Controllers
// Seed
app.get('/products/seed', (req, res) => {
    // Product.deleteMany({}, (error, seeds) => {});

    Product.create(productSeed, (error, data) => {
        res.render('new.ejs');
    });
});


// === INDEX ===
app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        })
    })
})


// === New ===
app.get('/products/new', (req, res) => {
    res.render('new.ejs')
})
// === Delete ===
// === Update ===


// === Create ===
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdProduct) => {
        res.redirect('/products')
    })
})


// === Edit ===
// === Show ===
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('show.ejs', {
            product: foundProduct
        })
    })
})


// === ROUTES end ===



// === listener === 
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})