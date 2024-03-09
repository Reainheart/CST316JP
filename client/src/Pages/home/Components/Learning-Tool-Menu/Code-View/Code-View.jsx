import React, { useState, useRef, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window/Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu/Code-Language-Selection-Menu";

const CodeView = () => {
    //const canvasRef = useRef(null); // reference to the canvas element
    const [selectedLanguage, setSelectedLanguage] = useState("C++");

    return (
        <>
            <Card>
                <div className="card-header">
                    <CodeLanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                    />
                </div>
                <div className="card-body">
                    <CodeViewWindow selectedLanguage={selectedLanguage} />
                </div>
            </Card>
        </>
    );
};

export default CodeView;
