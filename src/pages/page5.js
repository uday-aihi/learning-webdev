import React from "react";
import "./page5.css";
import { useState, useEffect } from "react";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });

    return <h1>Current time is {time}</h1>;
}

const Page5 = () => {
    return (
        <div>
            <p className="main-text">
                <Time></Time>
            </p>
        </div>
    );
};

export default Page5;
