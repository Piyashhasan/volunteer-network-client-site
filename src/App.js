import React, { createContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RegistrationInfo from './Components/RegistrationInfo/RegistrationInfo';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <NavBar></NavBar>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route  path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/work/:id">
                <Register />
              </PrivateRoute>
              <Route path="/regInfo">
                <RegistrationInfo/>
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Redirect to="/"/>
            </Switch>
          </Router>
    </UserContext.Provider>
  );
}

export default App;
