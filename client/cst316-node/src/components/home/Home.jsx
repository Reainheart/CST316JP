import React, { useState } from "react";
import "./home.css";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("C++");

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className="container">
            <div className="row button_wrapper">
                <div className="col-12 d-flex justify-content-end m-4 p-5">
                    <ButtonGroup aria-label="Language Selector">
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("C++")} // Update language when button is clicked
                            active={selectedLanguage === "C++"} // Set the active state for the button
                        >
                            C++
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("Java")} // Update language when button is clicked
                            active={selectedLanguage === "Java"} // Set the active state for the button
                        >
                            Java
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => handleLanguageClick("Python")} // Update language when button is clicked
                            active={selectedLanguage === "Python"} // Set the active state for the button
                        >
                            Python
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="content-area col-12 d-flex justify-content-end">
                    <p>Here is where the code will go blah blah blah</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
