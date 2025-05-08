import React from "react";
import "./page3.css";
import { useState } from "react";

function Maintext() {
    return <p className="main-text"> This text should be visible </p>;
}
const Page3 = () => {
    const [visible, setVisible] = useState(true);
    function handleClick() {
        setVisible(!visible);
    }

    return (
        <div>
            <div className="button-container">
                <button className="btn" onClick={handleClick}>
                    {visible ? "Hide text" : "Show text"}
                </button>
                {visible && <Maintext />}
            </div>
        </div>
    );
};

export default Page3;