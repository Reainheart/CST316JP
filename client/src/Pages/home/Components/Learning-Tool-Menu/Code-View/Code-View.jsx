import React, { useState, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window/Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu/Code-Language-Selection-Menu";

const CodeView = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("C++");
    const [codeLines, setCodeLines] = useState([]);

    const processData = (code) => {
        return code.split("\\n").map((line) => line.replace(/\\t/g, "    "));
    };

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
                setCodeLines(
                    languageData
                        ? processData(languageData.Example)
                        : ["No example code found for " + selectedLanguage]
                );
            } catch (error) {
                console.error("Fetching error:", error);
                setCodeLines([`Failed to load data: ${error.message}`]);
            }
        };
        fetchData();
    }, [selectedLanguage]);

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
                    <CodeViewWindow codeLines={codeLines} />
                </div>
            </Card>
        </>
    );
};

export default CodeView;
