import React, { useEffect, useState } from 'react';
import ExerciseDetail from './ExerciseDetail';

const ExerciseList = () => {
    const [exercise,setExercise]=useState([])
    console.log(exercise)


    useEffect(()=>{
        fetch('http://localhost:5000/exercise')
        .then(res=>res.json())
        .then(data=>{
            setExercise(data.data)

        })
        

    },[])
    return (
        <div>
         
         <h3>Logged Exercises</h3>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>

          </thead>
          <tbody>
        {  
        exercise.map(exer=>{
                    return <ExerciseDetail key={exer._id} exercise={exer} />
                })
            }
            
          </tbody>
          </table>
            
           
        </div>
    );
};

export default ExerciseList;