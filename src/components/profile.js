import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./navbar.css";

const Profile = () => {
    const { isLoggedIn, userData } = useContext(AuthContext);

    return (
        <div className="nav-user">
            {isLoggedIn && userData ? (
            <>
                <img
                src={userData.picture.thumbnail}
                alt={`${userData.name.first} ${userData.name.last}`}
                className="nav-avatar"
                />
                <span className="nav-username">
                {userData.name.first} {userData.name.last}
                </span>
            </>
            ) : (
                <Link to="/page7" className="nav-link">
                    Login
                </Link>
            )}
        </div>
    );
};

export default Profile;
