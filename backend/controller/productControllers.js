const Product = require("../models/Product");
// calling product.js mongoose model

const getAllProducts = async (req, res) => {
try {
    const products = await Product.find({});
    res.json(products);
    // passing the products down =>
//front end will make a request to this endpoint and
// recieve all the products
} catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error"})
// error if not working, showing code 500
}
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
//fetching through ID (as seen in productRoutes.js)
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"})
    }
    }
    module.exports = {
        getAllProducts,
        getProductById
    }
    // exporting so it can be routed whenever I go to
    // home or individual product