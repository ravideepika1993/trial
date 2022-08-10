import React, { Component } from "react";
//import {Form,Button}  from 'react-bootstrap';
import './FormValidation.css';
class FormValidation extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            age:null,
            ph:null,
            email:"",
            password:"",
            password2:"",
            errmsg:""
        }
    }
   handleChange=(event)=>{
       let n=event.target.name;
       let v=event.target.value;
       let err="";
       if(n==="age")
       if(v!="" && !Number(v)){
           err=<strong>Invalid value,Your age should be enter as number</strong>
       }
       if(n==="ph")
       if(v!=""){
           err=<strong>Invalid value,Your contact number should be enter as number</strong>
       }
       
       this.setState({errmsg:err});
       this.setState({[n]:v});
   }
   handleSubmit=event=>{
       event.preventDefault();
       
   }

    render(){
        return <form className="form-group" onSubmit={this.handleSubmit}>
            
            <div>
                <h>REGISTRATION FORM</h><br/>
                <label className="user-name">Enter Your Name</label><br/>
                <input className="input-g1" onChange={this.handleChange} name="username"/>
            </div>
            <div>
                <label className="user-age">Enter Your Age</label>
                <input className="input-g2" name="age" onChange={this.handleChange}/><p>{this.state.errmsg}</p>
            </div>
            <div>
                <label className="user-ph">Enter Your Contact Number</label><br/>
                <input className="input-g3" name="ph" onChange={this.handleChange} /><p>{this.state.errmsg}</p>
            </div>
            <div>
                <label className="user-email">Enter Your Email Id</label><br/>
                <input className="input-g4" />
            </div>
            <div>
                <label className="user-pw">Enter Your Password</label>
                <input className="input-g5"/>
            </div>
            <div>
                <label className="user-cpw">Enter Your Confirm Password</label><br/>
                <input className="input-g6"/>
            </div>
            <div>
                <br/>
                <input type="submit"  />
            </div>
            <div>
                <h1>Your name {this.state.username}</h1>
                <h2>Your age {this.state.age}</h2>
                <h3>Your contact number{this.state.ph}</h3>
            </div>


        </form>
        
    }
}
export default FormValidation;