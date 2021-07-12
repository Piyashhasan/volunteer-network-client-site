import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css'

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/regInfo" } };

    const [event, setEvent] = useState({date:'', description:'', organization:''})

    const handelChange = (e) =>{
        setEvent({...event, [e.target.name]: e.target.value})
    }
    
    const handelRegistrationInfo = (e) => {
        e.preventDefault()
        const data={...loggedInUser, ...event}
        fetch('https://pacific-tundra-19394.herokuapp.com/addRegistrationInfo',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data);
            history.push(from)
        } )
    }
    return (
        <div className="Register container">
            <div className="registration-area container">
                <h3 className="heading">Register as a Volunteer</h3>
                <form onSubmit={handelRegistrationInfo}>
                    <div class="form-group">
                        <label>Full name</label>
                        <input type="text" value={loggedInUser.name} name="fullName" class="form-control" id="" placeholder="Enter your full name"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" value={loggedInUser.email} name="email" class="form-control" id="" placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label >Date</label>
                        <input type="date"  value={event.date} onChange={(e) => handelChange(e)} name="date" class="form-control" id="" placeholder="Enter Date"/>
                    </div>
                    <div class="form-group">
                        <input type="text" value={event.description} onChange={(e) => handelChange(e)} name="description" class="form-control" id="" placeholder="Volunteer-task-name"/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" value={event.organization} onChange={(e) => handelChange(e)} name="organization" class="form-control" id="" placeholder=""/>
                    </div>
                    <button  type="submit" class="btn btn-primary button">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Register;