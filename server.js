// === Dependencies ===
require('dotenv').config()
const express = require('express')
const Product = require('./models/products')
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
app.use(express.urlencoded({ extended: false}))


// === ROUTES start ===

// Routes / Controllers
// Seed for testing - delete later

// Routes / Controllers
// Seed

app.get('/products/seed', (req, res) => {
	Book.deleteMany({}, (error, seeds) => {});

	Book.create(productSeed, (error, data) => {
		res.redirect('/products');
	});
});


// === INDEX ===
app.get('/products', (req, res) => {
    res.render('index.ejs')
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


// === ROUTES end ===



// === listener === 
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
