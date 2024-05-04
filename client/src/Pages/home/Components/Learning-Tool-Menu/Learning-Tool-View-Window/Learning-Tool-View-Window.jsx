import React from "react";
import CodeView from "../Code-View/Code-View";
import "./Learning-Tool-View-Window.css";

const LearningToolViewWindow = ({ selectedView }) => {
    const renderViewContent = () => {
        switch (selectedView) {
            case "Code View":
                return <CodeView className="code-view" />;
            case "Memory View":
                return <p>Memory View content goes here</p>;
            case "Function View":
                return <p>Function View content goes here</p>;
            default:
                return <p>Select a view</p>;
        }
    };

    return (
        <div>
            <h5 style={{ color: "pink" }}>{selectedView}</h5>
            {renderViewContent()}
        </div>
    );
};

export default LearningToolViewWindow;
