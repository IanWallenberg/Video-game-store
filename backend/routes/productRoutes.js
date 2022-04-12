const express = require("express");
const router = express.Router();
// running router as a function

const { getAllProducts, 
    getProductById
} = require("../controller/productControllers");
// inside of controllers I'm getting productControllers

//@description GET all products from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);
// router to getAllProducts leads home

//@description GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);
//this connects the id with the specific page

module.exports = router;

// fetching data and individual routes/products