// This file is the controller of the GET i.e READ from CRUD

// since we are going to insert/ update or delete the data, we need to impor the Schema
// since all the data is present in the Schema

// import the Schema
const ToDo = require("../Module/To-Do");

// we reach to the controller through ROUTE. But we dont know by which ROUTE we have reached here,
// Hence, we need to write the handler for the ROUTE    

exports.getToDo = async(request, response) => {
    try{
        // fetch all the todo items from DB
        const result = await ToDo.find({});

        // send the response
        response.status(200)
        .json(
            {
                success:true,
                data:result,
                messege: 'Data Fetched successfully'
            }
        );

    }catch(error){
        console.log(error);
        console.error(error);
        response.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                messege: error.messege
            }
        )
    }
} 


exports.getToDoById = async(request, response) => {
    try{
        // fetch the Id by which you want to search the data
        const id = request.params.id;

        // fetch all the todo items from DB of speicific id
        const result = await ToDo.findById({_id: id});

        // data not found for the given id
        if (!result){
            return response.status(404).json({
                success:false,
                messege: "No data found for the given ID"
            })
        }

        // data found for the given ID
        response.status(200).json({
            success:true,
            data: result,
            messege: "Data fetched successfully"
        })


    }catch(error){
        console.log(error);
        console.error(error);
        response.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                messege: error.messege
            }
        )
    }
} 