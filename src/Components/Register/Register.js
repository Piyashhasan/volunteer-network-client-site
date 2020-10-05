import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Register.css'

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="Register container">
            <div className="registration-area container">
                <h3 className="heading">Register as a Volunteer</h3>
                <form>
                    
                    <div class="form-group">
                        <label for="exampleInputEmail1">Full name</label>
                        <input type="text" value={loggedInUser.name} class="form-control" id="exampleInputEmail1" placeholder="Enter your full name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="email" value={loggedInUser.email} class="form-control" id="exampleInputPassword1" placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Data</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Date"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Description"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Organize books at the library</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder=""/>
                    </div>
                    <button type="submit" class="btn btn-primary button">Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Register;