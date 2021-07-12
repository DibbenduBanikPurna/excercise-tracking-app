import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
    const [user,setUser]=useState({})
    //console.log(user)
    const history=useHistory()

    const handleBlur=(e)=>{
        
        const newUser={...user,

            [e.target.name]:e.target.value
        }
        setUser(newUser)

    }

    const handleSubmit=(e)=>{

        fetch('http://localhost:5000/user/',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        history.push('/')
        e.preventDefault()
    }
    return (
        <div className="col-md-7 mt-5">

            <h4>Create New User</h4>

            <form onSubmit={handleSubmit}>

                <label>username</label>
                <br/>
                <input className="form-control" onBlur={handleBlur} name="userName" type="text" placeholder="Enter user-name"/>
                <br/>
                <input className="btn btn-primary" type="submit" value="create User"/>
            </form>
            
        </div>
    );
};

export default CreateUser;