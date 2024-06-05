/* eslint-disable react/prop-types */
//import React, { useState, useRef, useEffect } from "react";
import "./Code-View.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CodeLanguageSelector = (props) => {
    const handleLanguageClick = (language) => {
        props.setSelectedLanguage(language);
    };

    return (
        <div className="btn-toolbar justify-content-between">
            <ButtonGroup className="btn-toolbar justify-content-between" aria-label="Language Selector">
                <div className="btn-group" role="group" aria-label="First group">
                    <Button
                        variant="secondary"
                        onClick={() => handleLanguageClick("C++")}
                        active={props.selectedLanguage === "C++"}
                    >
                        C++
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => handleLanguageClick("Python")}
                        active={props.selectedLanguage === "Python"}
                    >
                        Python
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => handleLanguageClick("Java")}
                        active={props.selectedLanguage === "Java"}
                    >
                        Java
                    </Button>
                </div>

            </ButtonGroup>
            <ButtonGroup className="btn-toolbar justify-content-between" aria-label="Language Selector">
                <div className="btn-group" role="group" aria-label="First group">
                    <Button
                        variant="secondary"
                        onClick={props.collapseCodeView}
                        active={props.open}
                    >
                        {props.open ? '^' : 'v'}
                    </Button>
                </div>
                <div className="btn-group" role="group" aria-label="First group">
                    <Button
                        variant="secondary"
                        onClick={props.closeTheCard}
                    >
                        X
                    </Button>
                </div>
            </ButtonGroup>
        </div>
    );
};

export default CodeLanguageSelector;
