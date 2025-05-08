import React from "react";
import "./page4.css";
import { useState } from "react";

const Page4 = () => {
    const [counterLeft, setCounterLeft] = useState(0);
    const [counterRight, setCounterRight] = useState(0);

    function handleClickLeft() {
        setCounterLeft(counterLeft + 1);
    }

    function handleClickRight() {
        setCounterRight(counterRight + 1);
    }

    return (
        <div>
            <p className="main-text">
                Clicked the buttons total {counterLeft + counterRight} times.
                <br></br>Left button {counterLeft} times.<br></br>Right button{" "}
                {counterRight} times.
            </p>
            <div className="button-container">
                <button className="btn" onClick={handleClickLeft}>
                    Left Clicked {counterLeft} times
                </button>
                <button className="btn" onClick={handleClickRight}>
                    Right Clicked {counterRight} times
                </button>
            </div>
        </div>
    );
};

export default Page4;