import React, { useState } from "react";
function ContactForm(ContactValidate){
    const[values,setValues]=useState({
        firstname:"",
        ph:"",
        email:"",
        
    });
    const[Data,setData]=useState([]);
    
 
    
    

    const[errors,setErrors]=useState({})
    
    const handleChange=e=>{
        e.preventDefault();
        const fieldname=e.target.getAttribute('name');
        const fieldvalue=e.target.value;
        const addValues={...values};
        addValues[fieldname]=fieldvalue;
        setValues(addValues);

        };
    
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(ContactValidate(values))
        const addData={
        firstname:values.firstname,
        ph:values.ph,
        email:values.email,
        

        }
        const addDatas=[...Data,addData]
        setData(addDatas);

        
        
        
        
    }
    return  {handleChange,values,handleSubmit,errors,Data}
    



}
export default ContactForm;