function validation(values,check){
    let error = {}
    if(!check){
        error.check = "You have to check the permission!"
    }else{
        error.check = ""
    }
    if(values.phone === ""){
        error.phone = "The phone number can not be empty"
    }
    else{
        error.phone = ""
    }
    if(values.name === ""){
        error.name = "The name  can not be empty"
    }
    else{
        error.name = ""
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