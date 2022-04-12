require("dotenv").config();
// calling dotenv to connect with mongoose and mongoDB

const mongoose = require("mongoose");
// making a variable to call mongoose

const connectDB = async () => {
    try {
        //connecting to database with an async function, making sure it loads
        // when mongoose has connected to env + Mongo URI
                await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,

            // The underlying MongoDB driver has deprecated their 
            // current connection string parser. Because this is a 
            // major change, they added the useNewUrlParser flag to 
            // allow users to fall back to the old parser if they 
            // find a bug in the new parser. You should set 
            // useNewUrlParser: true unless that prevents you from 
            // connecting.

            useUnifiedTopology: true

            // With useUnifiedTopology , the MongoDB driver will try to find 
            // a server to send any given operation to, and keep retrying
        });


    console.log("MongoDB connection SUCCESS");
    //if successful, showing this in the console
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
        // Exit code 1 is for when unhandled fatal exceptions
        //  occur that was not handled by the domain. 
        //  process. exit(1); process. exit() is one of the 
        //  methods for Node. Node normally exits with a 0 status
        //  code when no more async operations are pending. 

    }
}
module.exports = connectDB;

// exports connectDB