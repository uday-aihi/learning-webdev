import React from "react";
import "./page1.css";
import "./common.css";


const ProfileCard = ({ user }) => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <img
                    src={user.profileImage}
                    alt="Profile"
                    className="profile-image"
                />
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-dob">Date of Birth: {user.dob}</p>
            </div>
        </div>
    );
};

const Page1 = () => {
    const user = {
        name: "Uday Yadav",
        dob: "31-01-2004",
        profileImage:
            "https://movingimage.org/wp-content/uploads/2021/04/Kermit-2014.002.0282.jpg",
    };

    return (
        <ProfileCard user={user}></ProfileCard>
    );
};

export default Page1;