function validation(values){
    let error = {}
    
    if(values.phone === ""){
        error.phone = "The phone number can not be empty"
    }
   
    else{
        error.phone = ""
    }
    
    if(values.password === ""){
        error.password = "The password number can not be empty"
    }
   
    else{
        error.password = ""
    }
    return error;

}
export default validation;