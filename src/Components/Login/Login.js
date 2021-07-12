import React, { useContext } from 'react';
import './Login.css'
import googleImg from '../../images/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handelGoogleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            alert('login successful');
        })
        .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, credential, email);
        });
    };
    return (
        <div className="Login container text-center"> 
        <div className="login-area container" >
            <h3>Login With</h3>
            <button onClick={handelGoogleSignIn} type="submit" className="btn Button"> <img src={googleImg} alt=""/>Continue with Google</button> 
            <p>Dont't have an account? <a href="#">Creat an account</a></p>
        </div>
        </div>
    );
};

export default Login;