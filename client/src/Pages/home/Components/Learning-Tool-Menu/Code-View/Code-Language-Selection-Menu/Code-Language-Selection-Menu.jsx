/* eslint-disable react/prop-types */
//import React, { useState, useRef, useEffect } from "react";
import "./Code-Language-Selection-Menu.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const CodeLanguageSelector = (props) => {
    const handleLanguageClick = (language) => {
        props.setSelectedLanguage(language);
    };

    return (
        <div>
            <ButtonGroup aria-label="Language Selector">
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
            </ButtonGroup>
        </div>
    );
};

export default CodeLanguageSelector;
