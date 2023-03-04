import "./Registration.css";
import { useState } from "react";

function Registration(props){
   //States
   const [fname, setFname]= useState("");
   const [lname, setLname]= useState("");
   const [welcomeMsg, setWelcomeMsg]= useState("");

   // Submitting the form
   const handleOnSubmit=(evt)=>{
       setWelcomeMsg(`${fname} ${lname}`);
       evt.preventDefault();
   }

   // Change value of the state after typing first name
   const handleFname=(evt)=>{
       setFname(evt.target.value);
   }

     // Change value of the state after typing last name
     const handleLname=(evt)=>{
        setLname(evt.target.value);
    }
 
    return(
        <div className="regn_body">
            <h1>Course Registration Form  for <span>{props.courseName}</span></h1>
            <form className="frm_register"  onSubmit={handleOnSubmit} >
                <label forHtml="fname">First name</label>
                <input type="text" id="fname" onBlur={handleFname}/><br/>
                <label forHtml="lname">Last name</label>
                <input type="text" id="lname" onBlur={handleLname}/><br/>
                <input type="submit" value="Submit"/><br/>
                <label>Welcome {welcomeMsg}</label>
            </form>
        </div>
    );
 }
 
 export default Registration;