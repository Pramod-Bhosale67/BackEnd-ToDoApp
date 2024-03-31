// since controller will decide what we need to do of that ROUTE
// we need to fetch the controller

const express = require('express');
const router = express.Router();

// import the controller, becuase controller decides the what needs to be done of router
// THis is for the INSERT i.e CREATE from CRUD
const  {createToDo} = require("../Controller/createToDo");

// This is for READ (GET) (CRUD)
const  {getToDo, getToDoById} = require("../Controller/getToDo");

// This is for the update from CRUD
const {updateToDo} = require("../Controller/updateToDo");

// This is for delete from CRUD
const {deleteToDo} = require("../Controller/deleteToDo");
 
// define API routes

// this is for the insert i.e CREATE (CRUD)
router.post("/createToDo", createToDo);

// this is for the READ i.e CRUD
router.get("/getToDo", getToDo);

router.get("/getToDo/:id", getToDoById);

// this is for update i.e CRUD
router.put("/updateToDo/:id", updateToDo);

// This is for delete i.e CRUD
router.delete("/deleteToDo/:id", deleteToDo);

module.exports = router;