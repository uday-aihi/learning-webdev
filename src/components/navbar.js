import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/page1" className="nav-link">
                Profile
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
        </nav>
    );
};

export default Navbar;
