/* eslint-disable react/prop-types */
//import React, { useState, useRef, useEffect } from "react";
//import "./Code-View-Window.css";

const CodeViewWindow = ({ codeLines }) => {
    return (
        <pre className="code-view-container">
            {codeLines.map((line, index) => (
                // Render each line inside a <code> tag
                <code key={index}>
                    {line}
                    <br />
                </code>
            ))}
        </pre>
    );
};

export default CodeViewWindow;
