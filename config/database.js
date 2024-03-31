// this file is meant for establishing the connection between the server and the DB

const mongoose = require('mongoose');


// step 2
// by this, whatever we have written in the .env file, will be loaded in the process 
// object

require("dotenv").config();


// step 1
// here, DB_URL is present in the .env file. In order to feed it in process object, we 
// need to use dotenv
// now, install the dotenv --> (npm i dotenv)
const dbConnect = () => {
    mongoose.connect(process.env.DB_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true    
    })
    .then(() => {console.log("Connected successfully");})
    .catch((error) => {
        console.log("Connection error");
        console.log(error.messege);
        process.exit(1);
    });
}

module.exports = dbConnect;