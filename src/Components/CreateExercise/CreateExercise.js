import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateExercise = () => {
    
    const [exercise,setExercise]=useState({})
    //console.log(exercise)

    const history=useHistory()

    const handleBlur=(e)=>{
        const newExercise={...exercise,
        [e.target.name]:e.target.value 
        }

        setExercise(newExercise)

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        

            fetch('http://localhost:5000/exercise',{
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(exercise)
            })

            history.push('/')

            fetch('http://localhost:5000/user',{
                method:"POST",
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify(exercise)

            })
            

       
    }
    return (
        <div className="col-md-7 mt-5">

            <h4>Create New Exercise Log</h4>

            <form onSubmit={handleSubmit}>
               <label>UserName:</label>
               <br/>
               <input onBlur={handleBlur} className="form-control" type="text" placeholder="user-name" name="userName"/> 
               <br/>
               <label>Description:</label>
               <br/>
               <input onBlur={handleBlur} className="form-control" type="text" placeholder="description" name="description"/> 
               <br/>
               <label>Duration (in minutes):</label>
               <br/>
              
               <input onBlur={handleBlur} defaultValue="0" className="form-control" type="text" placeholder="duration" name="duration"/> 
               <br/>
               <label>Date:</label>
               <br/>
               <input onBlur={handleBlur}  defaultValue={new Date().toLocaleDateString()} className="form-control" type="text" placeholder="date" name="date"/> 
               <br/>
               <input type="submit" value="create exercise log" className="btn btn-primary"/>
            </form>
            
        </div>
    );
};

export default CreateExercise;