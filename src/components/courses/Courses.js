import "./Courses.css"
import Registration from "../registration/Registration";
import {useState} from 'react';

function Courses(){
   // State
   const [course, setCourse]=useState("Flutter");

   // Change heading when changing drop down
   const handleOnChange = (evt)=>{
       setCourse(evt.target.value);
   }
   return(
    <div className="course">
        <label>Select a course: </label>
        <select value={course} onChange={handleOnChange}>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="Angular">Angular</option>
            <option value="Flutter">Flutter</option>
        </select>
        {/* Registration component */}
        <Registration courseName={course}/>
    </div>
);
}

export default Courses;