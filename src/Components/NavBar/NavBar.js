import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from "../../images/Group 1329.png";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="container-fluid nav-bg Nav">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link exact className="navbar-brand" to="/">
                                <img src={logo} alt="" />
                            </Link>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto mr-3">
                                    <li className="nav-item active mr-4">
                                        <Link to="/home"className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <a className="nav-link" href="#">Donation</a>
                                    </li>
                                    <li className="nav-item mr-4">
                                        <a className="nav-link" href="#">Events</a>
                                    </li><li className="nav-item mr-4">
                                        <a className="nav-link" href="#">Blogs</a>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <Link to="/login">
                                        <button className="btn btn-outline-primary mr-4 my-2 my-sm-0" type="submit">Register</button>
                                    </Link> 
                                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Admin</button>
                                </form>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;