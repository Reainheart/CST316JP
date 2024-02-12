import React, { useState, useRef, useEffect } from "react";
import "./Code-Language-Selection-Menu.css";

const CodeLanguageSelector = () => {
    const canvasRef = useRef(null); // reference to the canvas element
    const [selectedLanguage, setSelectedLanguage] = useState("C++");

    const [examples, setExamples] = useState([]);
    const [currentExample, setCurrentExample] = useState("");

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5022/api/Examples"
                );
                const data = await response.json();
                setExamples(data);
                // Set initial example
                const initialExample = data.find(
                    (example) => example.Language === "C++"
                );
                setCurrentExample(initialExample ? initialExample.Example : "");
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Update example when language changes
        const selectedExample = examples.find(
            (example) => example.Language === selectedLanguage
        );
        setCurrentExample(selectedExample ? selectedExample.Example : "");
    }, [selectedLanguage, examples]);

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
        return (
            <>
                <div>
                    <ButtonGroup aria-label="Language Selector">
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("C++")}
                            active={selectedLanguage === "C++"}
                        >
                            C++
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("Python")}
                            active={selectedLanguage === "Python"}
                        >
                            Python
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("Java")}
                            active={selectedLanguage === "Java"}
                        >
                            Java
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <pre
                        style={{
                            width: "25em",
                            border: "1px solid black",
                            borderRadius: "10px",
                            marginTop: "1em",
                            padding: "1em",
                        }}
                    >
                        {currentExample}
                    </pre>
                </div>
            </>
        );
    };
}   

export default CodeLanguageSelector;
