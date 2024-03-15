import React, { useState, useRef, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window/Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu/Code-Language-Selection-Menu";

const CodeView = () => {
    //const canvasRef = useRef(null); // reference to the canvas element
    const [selectedLanguage, setSelectedLanguage] = useState("C++");
    const [selectedLanguageCode, setSelectedLanguageCode] = useState("API Not Called");

    useEffect(() => {
        // set canvas size based on the window size
        const fetchData = async () => {
            const response = await fetch("https://api.example.com/data.json");
            const jsonData = await response.json();
            // JSON.parse does not evaluate the attacker's scripts.
            return JSON.parse(jsonData);
        };
        fetchData();
    }, [setSelectedLanguageCode]);

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
                    <CodeViewWindow
                        selectedLanguage={selectedLanguage}
                        selectedLanguageCode={selectedLanguageCode}
                    />
                </div>
            </Card>
        </>
    );
};

export default CodeView;
//... rest of the above code.
