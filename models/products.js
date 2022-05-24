// === Enable mongoose access in this folder === 
const mongoose = require('mongoose')

// === Setup Schema === 
const Schema = mongoose.Schema

// === Create new Product in moongoose from Schema === 
const productSchema = new Schema (
    {
        name: {type: String, required: true},
        description: String,
        img: String,
        price: {type: Number, min: [0, "can't be less than 0"]},
        qty: {type: Number, min: [0, "can't be less than 0"]}
    }
)

// === build product model ===
const Product = mongoose.model('Product', productSchema)

// === exports productSchema === 
module.exports = Product