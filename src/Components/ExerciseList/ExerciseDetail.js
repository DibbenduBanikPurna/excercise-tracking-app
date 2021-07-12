import React from 'react';
import {  useHistory } from 'react-router-dom';

const ExerciseDetail = ({exercise}) => {

    const history=useHistory()

    const updateExercise=(id)=>{
        history.push(`/edit/${id}`)
    }

    const deleteExercise=(id)=>{

        fetch(`http://localhost:5000/exercise/${id}`,{
            method:'DELETE'
        })

        history.push('/')
    }
 
    return (
        
        <tr>
           
    <td>{exercise.userName}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date}</td>
    <td>
      <span onClick={()=>updateExercise(exercise._id)} className="btn btn-warning">edit</span> || <span onClick={()=>deleteExercise(exercise._id)} className="btn btn-danger">delete</span>
    </td>
    </tr> 
    
  
            
    
    );
};

export default ExerciseDetail;