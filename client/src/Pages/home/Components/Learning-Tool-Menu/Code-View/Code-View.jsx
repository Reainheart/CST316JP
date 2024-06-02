import React, { useState, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window/Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu/Code-Language-Selection-Menu";
import PropTypes from 'prop-types';

const sampleCodeNode = "http://localhost:3000/GetSampleCodeNode";
const sampleCodeArray = "http://localhost:3000/GetSampleCodeArray";
const sampleCodeLinkedList = "http://localhost:3000/GetSampleCodeLinkedList";


const CodeView = ({CanvasObjects}) => {
    const [selectedLanguage, setSelectedLanguage] = useState("C++");
    const [structures, setStructures] = useState([]);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(
        "Select a language to view the example."
    );

    useEffect(() => {
        //console.log(CanvasObjects);
        setStructures(CanvasObjects);
    },[CanvasObjects])

    useEffect(() => {
        const fetchData = async () => {

            try {
                const url = "http://localhost:3000/GetSampleCodeNode";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(
                        `Network response was not ok: ${response.status} ${response.statusText}`
                    );
                }
                const jsonData = await response.json();
                const languageData = jsonData.find(
                    (item) => item.Language === selectedLanguage
                );
                setSelectedLanguageCode(
                    languageData
                        ? languageData.Example
                        : `No example code found for ${selectedLanguage}`
                );
            } catch (error) {
                console.error("Fetching error:", error);
                setSelectedLanguageCode(
                    `Failed to load data: ${error.message}`
                );
            }
        };
        fetchData();
    }, [selectedLanguage]); // This will re-fetch when selectedLanguage changes

    return (
        <div>
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
                    {structures}
                </div>
            </Card>
        </div>
    );
};
CodeView.propTypes = {
    CanvasObjects: PropTypes.any
};

export default CodeView;
