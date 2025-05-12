import React from "react";
import "./common.css";
import "./page2.css";
import { useState } from "react";

const Page2 = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p className="main-text">Clicked the button {count} times</p>
            <div className="button-container">
                <button className="btn" onClick={handleClick}>
                    Clicked {count} times
                </button>
            </div>
        </div>
    );
};

export default Page2;
