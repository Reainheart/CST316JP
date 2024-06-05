import { useState, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu";
import PropTypes from 'prop-types';

const CodeCard = ({ structureName }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("C++");
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(
        "Select a language to view the example."
    );

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:3000/GetSampleCode";
            const structureUrl = url + structureName
            fetch(structureUrl).then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Network response was not ok: ${response.status} ${response.statusText}`
                    );
                }
                return response.json();
            }).then((jsonData) => {
                const languageData = jsonData.find(
                    (item) => item.Language === selectedLanguage
                );
                setSelectedLanguageCode(
                    languageData
                        ? languageData.Example
                        : `No example code found for ${selectedLanguage}`
                );
            }).catch((error)=>{
                console.error("Fetching error:", error);
                setSelectedLanguageCode(
                    `Failed to load data: ${error.message}`
                );
            })
        };
        fetchData();
    }, []); // This will re-fetch when selectedLanguage changes

    return (
            <div className="code-view-card">
                <Card>
                    <h5>
                        {structureName}
                    </h5>
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
        </div>
    );
};
CodeCard.propTypes = {
    structureName: PropTypes.string.isRequired
};

export default CodeCard;
