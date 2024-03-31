// this file is the controller of the DELETE from CRUD


// since we are going to delete the data, we need to import the Schema
// since all the data is present in the Schema

// import the Schema
const ToDo = require("../Module/To-Do");

// we reach to the controller through ROUTE. But we dont know by which ROUTE we have reached here,
// Hence, we need to write the handler for the ROUTE    

exports.deleteToDo = async(request, response) => {
    try{
        const id = request.params.id;
        
        // fetch all the todo items from DB of speicific id
        const result = await ToDo.findByIdAndDelete({_id: id});

        response.status(200).json({
            success:true,
            messege: "TODO Deleted"
        })   

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
