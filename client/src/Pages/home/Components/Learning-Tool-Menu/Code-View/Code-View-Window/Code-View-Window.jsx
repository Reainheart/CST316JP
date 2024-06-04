/* eslint-disable react/prop-types */
//import React, { useState, useRef, useEffect } from "react";
import "./Code-View-Window.css";

const CodeViewWindow = (props) => {
    return (
        <div>
            <h5 style={{ color: "black" }}>{props.selectedLanguage}</h5>
            <pre className="card-text">{props.selectedLanguageCode}</pre>
        </div>
    );
};

export default CodeViewWindow;
