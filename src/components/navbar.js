import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import "./navbar.css";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/page1" className="nav-link">
                    Author
                </Link>
                <Link to="/page2" className="nav-link">
                    Counter
                </Link>
                <Link to="/page3" className="nav-link">
                    Text Toggle
                </Link>
                <Link to="/page4" className="nav-link">
                    Double Counter
                </Link>
                <Link to="/page5" className="nav-link">
                    Current Time
                </Link>
                <Link to="/page6" className="nav-link">
                    Feedback
                </Link>
                <Link to="/page7" className="nav-link">
                    Login
                </Link>
            </div>
            <Profile></Profile>
        </nav>
    );
};

export default Navbar;
