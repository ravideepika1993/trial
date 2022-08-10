import React from "react";
function ContactValidate(values){
    let errors={};
    if(!values.firstname.trim()){
        errors.firstname="firstname is required";
    }
    if(!values.ph.trim()){
        errors.ph="ph is required";
    }
    if(!values.email){
        errors.email="email is required";
    }
    if(!values.msg){
        errors.msg="msg is required";
    }
    return errors;
    

}
export default ContactValidate;