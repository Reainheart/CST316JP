/* eslint-disable react/prop-types */
//import React, { useState, useRef, useEffect } from "react";
//import "./Code-View-Window.css";


const CodeViewWindow = (props) => {

    return (
        <>
            <h5 className="card-title">{props.selectedLanguage}</h5>
            <p className="card-text">{props.selectedLanguageCode}</p>
        </>
    );
}

export default CodeViewWindow;
