const express = require('express');
const app = express();
 
// to load the data written in the .evn into the process object
// we need to install dotenv first (npm i dotenv)
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse the json request body
app.use(express.json());

// import the routes in TODO 
const toDoRoutes = require('./Router/TodoRoute');  


// mount the todo API routes
app.use("/api/v1", toDoRoutes);

// activate the server
app.listen(PORT, () => {
    console.log(`Server started successfully at PORT NO: ${PORT}`);
})

// DB connection
const dbConnect = require('./config/database');
dbConnect();

// default route
app.get("/", (request , response) => {
    response.send(`<h1>HOME PAGE</h1>`)
})