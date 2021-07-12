import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ExerciseList from './Components/ExerciseList/ExerciseList';
import EditExercise from './Components/EditExercise/EditExercise';
import CreateExercise from './Components/CreateExercise/CreateExercise';
import CreateUser from './Components/CreateUser/CreateUser';
function App() {
  return (
    <div className="container">
      <Router>
      <Navbar/>
        <Switch>
        
          <Route exact path="/"> <ExerciseList/></Route>
          <Route path="/edit/:id"> <EditExercise/> </Route>
          <Route path="/create"> <CreateExercise/> </Route>
          <Route path="/user"> <CreateUser/> </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
