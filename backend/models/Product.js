const mongoose = require("mongoose");
/// required for using mongoose thus using schemas

// In NodeJS, require() is a built-in function to include 
// external modules that exist in separate files. require()
//  statement basically reads a JavaScript file, executes it, and 
//  then proceeds to return the export object.

const productSchema = new mongoose.Schema({
    //passing it in an object, setting up the schema structure:
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})
const Product = mongoose.model("product", productSchema);
// passing product as a string and changes the collection name to product
// passing productSchema telling it about the structure

module.exports = Product;
// - Using export.modules takes a single class/variable/function
// - Using export takes multiple variables/functions


// this here creates the model that will import the data from the database