// this file is meant for defining the Schema of the database
// Schema is nothing but structure of the database, what value we need to store

const mongoose = require("mongoose");

const ToDo_Schema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength: 50
        },

        description:{
            type:String,
            required: true,
            maxLength: 50,
        },

        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },

        updatedAt: {
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

// ToDo_Schema is exported as a To-Do
module.exports = mongoose.model("To-Do", ToDo_Schema);