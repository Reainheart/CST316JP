import React from "react";
import CodeView from "../Code-View/Code-View";

const LearningToolViewWindow = ({ selectedView, HomeWidth, HomeHeight }) => {
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
        <>
            <h5 className="card-title">{selectedView}</h5>
            {renderViewContent()}
        </>
    );
};

export default LearningToolViewWindow;
