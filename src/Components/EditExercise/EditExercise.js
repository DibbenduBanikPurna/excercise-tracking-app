import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditExercise = () => {
    const [exercise,setExercise]=useState({})

    const history=useHistory();
    const [singleExercise,setSingleExercise]=useState({})
  //  console.log(singleExercise)

    const {id}=useParams()

    useEffect(()=>{
        fetch(`http://localhost:5000/exercise/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setSingleExercise(data.data)
        })
    },[id])

    const handleBlur=(e)=>{
        const newExercise={...exercise,
            [e.target.name]:e.target.value
        }
        setExercise(newExercise)
    }

    const handleSubmit=(e)=>{

        fetch(`http://localhost:5000/exercise/${id}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(exercise)
        })
        
        history.push('/')

        e.preventDefault()
    }

    return (
        <div>
            <h3>Update Exercise</h3>

             <form onSubmit={handleSubmit}>
                 
               <label>UserName:</label>
               <br/>
               <input onBlur={handleBlur} defaultValue={singleExercise.userName} className="form-control" type="text" placeholder="user-name" name="userName"/> 
               <br/>
               <label>Description:</label>
               <br/>
               <input onBlur={handleBlur} defaultValue={singleExercise.description} className="form-control" type="text" placeholder="description" name="description"/> 
               <br/>
               <label>Duration (in minutes):</label>
               <br/>
              
               <input onBlur={handleBlur} defaultValue={singleExercise.duration} className="form-control" type="text" placeholder="duration" name="duration"/> 
               <br/>
               <label>Date:</label>
               <br/>
               <input onBlur={handleBlur}  defaultValue={singleExercise.date} className="form-control" type="text" placeholder="date" name="date"/> 
               <br/>
               <input  type="submit" value="update exercise log" className="btn btn-primary"/>
            </form>
        </div>
    );
};

export default EditExercise;