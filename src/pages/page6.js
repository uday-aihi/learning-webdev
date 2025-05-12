import React, { useState } from "react";
import "./common.css";
import "./page6.css";

const FeedbackForm = ({ onSubmit }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            onSubmit(input);
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your feedback..."
                className="feedback-input"
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

const FeedbackList = ({ feedback }) => {
    return (
        <div className="feedback-list">
            <h3>Feedback Summary</h3>
            <ul>
                {feedback.map((item, index) => (
                    <li key={index} className="feedback-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

const Page6 = () => {
    const [feedbackData, setFeedbackData] = useState([]);

    const handleFeedbackSubmit = (newFeedback) => {
        setFeedbackData((prev) => [...prev, newFeedback]);
    };

    return (
        <div className="feedback-app">
            <h2 className="main-text">Customer Feedback App</h2>
            <FeedbackForm onSubmit={handleFeedbackSubmit} />
            <FeedbackList feedback={feedbackData} />
        </div>
    );
};

export default Page6;