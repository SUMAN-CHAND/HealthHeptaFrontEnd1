function validation(values){
    let error = {}
    // const phone_pattern = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    // const password_pattern = /[A-Z]/ && /[0-9]/ && !/[aeiou]/ && /^[@#][A-Za-z0-9]{7,13}$/;

    if(values.phone === ""){
        error.phone = "The phone number can not be empty"
    }
    // else if(!phone_pattern.test(values.phone)){
    //     error.phone = "Phone pattern didn't match"
    // }
    else{
        error.phone = ""
    }
    
    if(values.password === ""){
        error.password = "The password number can not be empty"
    }
    // else if(!password_pattern.test(values.password)){
    //     error.password = "password pattern didn't match"
    // }
    else{
        error.password = ""
    }
    return error;

}
export default validation;