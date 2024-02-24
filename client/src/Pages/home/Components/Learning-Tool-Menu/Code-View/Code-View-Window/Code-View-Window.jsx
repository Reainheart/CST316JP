import React, { useState, useRef, useEffect } from "react";
//import "./Code-View-Window.css";


const CodeViewWindow = (props) => {
    
    return (
        <>
            <h5 className="card-title">{props.selectedLanguage}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </>
    );
}

export default CodeViewWindow;
