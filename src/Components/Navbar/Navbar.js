import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">ExerciseTracker</Link> */}
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link className="nav-link" to="/">Exercises</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create Exercise Log</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">Create User</Link>
        </li>
      
      
      
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;