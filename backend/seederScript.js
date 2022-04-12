require("dotenv").config();
// getting the dotenv configuration

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

// requiring the data from products, configuration for right server
// and failtest, and connecting to mongoDB and the mongoose model

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
await Product.insertMany(productsData);
console.log("Data import success");
// this deletes everything in the database and inserting the items
// in MongoDB. Pass the variable in order to insert data

process.exit();
    } catch (error){
        console.error("Error with data import");
        process.exit(1);        
    }
};
// Exit code 1 is for when unhandled fatal exceptions
        //  occur that was not handled by the domain. 
        //  process. exit(1); process. exit() is one of the 
        //  methods for Node. Node normally exits with a 0 status
        //  code when no more async operations are pending. 

importData();

// when the importData function is called we want to run this immedietly

// this function is added in package.json as
// data:import": "node nackend/seederScript.js"
// and can be run as npm run data:import and now update
// mongoDB with the right information