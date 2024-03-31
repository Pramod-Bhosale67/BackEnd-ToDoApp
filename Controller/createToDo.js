// this file is the controller of the INSERT i.e CREATE from CRUD


// since we are going to insert/ update or delete the data, we need to impor the Schema
// since all the data is present in the Schema

// import the Schema
const ToDo = require("../Module/To-Do");

// we reach to the controller through ROUTE. But we dont know by which ROUTE we have reached here,
// Hence, we need to write the handler for the ROUTE    

exports.createToDo = async(request, response) => {
    try{
        // extract the title and description from the request body
        const {title, description} = request.body;

        // now create a new ToDo object and insert into DB
        // INSERT => CREATE --- > (CRUD Formula)
        const result = await ToDo.create({title, description});

        // send the json response with success flag. 200 status is for success
        response.status(200).json(
            {
                success:true,
                data:result,
                messege: 'Entry created successfully'
            }
        );

    }catch(error){
        console.log(error);
        console.error(error);
        response.status((500).json(
            {
                success:false,
                data:"internal server error",
                messege: error.messege
            }
        ))
    }
} 
