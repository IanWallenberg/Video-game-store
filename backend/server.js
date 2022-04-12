require('dotenv').config();
// calls for the configuration functions for dotenv, connecting w. .env
// with this you can call the node backend/server.js to see if it's running

const express = require("express");
// Initiating express 
const connectDB = require("./config/db");
// fetching from config for connecting database
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();
// Initiating the app with express

app.use(express.json());
// we need json data to our react client
//and we can create our routes

app.use("/api/products", productRoutes);
//using the route to products giving access to
// front end

const PORT = process.env.PORT || 5000;
// Variable port
// dot.env loads environment variables from a . env file into process. env .
// if it doesn't exist it's an or statement telling it can be found on port 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Want to listen on a port that is from environment variables
