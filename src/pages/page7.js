import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./page7.css";
import PostViewer from "../components/postviewer";

const LoginToggle = () => {
    const { isLoggedIn, toggleLogin, userData, fetchUserData } = useContext(AuthContext);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (isLoggedIn && !userData) {
        fetchUserData().catch((err) => {
          setError("Failed to fetch user data.");
          console.error(err);
        }).finally(() => {
        });
      }
    }, [isLoggedIn, userData, fetchUserData]);
    return (
        <>
            <button onClick={toggleLogin} className="btn">
                {isLoggedIn ? "Logout" : "Login"}
            </button>

            {!isLoggedIn && <p>Please log in to view user data.</p>}

            {error && <p>{error}</p>}

            {isLoggedIn && userData && (
                <div className="user-card">
                <img
                    src={userData.picture.large}
                    alt={`${userData.name.first} ${userData.name.last}`}
                    className="user-image"
                />
                <h3>
                    {userData.name.title} {userData.name.first} {userData.name.last}
                </h3>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>
                    Location: {userData.location.city}, {userData.location.country}
                </p>
                </div>
            )}
        </>
    );

};

const Page7 = () => {

  return (
    <div className="feedback-app">
      <h2 className="main-text">Random User Profile</h2>
      <LoginToggle></LoginToggle>
      <PostViewer></PostViewer>
    </div>
  );
};

export default Page7;
