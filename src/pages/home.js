import React from "react";
import "./home.css";
import Navbar from "../components/navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="home-container">
                <h1>Welcome to Uday's Learning Project</h1>
                <p>This is the Home page.</p>
            </div>
        </div>
    );
};

export default Home;
