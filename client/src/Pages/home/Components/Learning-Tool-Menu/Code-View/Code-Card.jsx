import { useState, useEffect } from "react";
import "./Code-View.css";
import Card from "react-bootstrap/card";
import CodeViewWindow from "./Code-View-Window";
import CodeLanguageSelector from "./Code-Language-Selection-Menu";
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";


const CodeCard = ({ structureName, closeCard }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("C++");
    const [open, toggleOpen] = useState(true);
    const [selectedLanguageCode, setSelectedLanguageCode] = useState(
        "Select a language to view the example."
    );

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:3000/GetSampleCode";
            const urlsafeStructureName = structureName.replace(' ', '')
            const structureUrl = url + urlsafeStructureName
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
            }).catch((error) => {
                console.error("Fetching error:", error);
                if ((error.message).includes('404'))
                    setSelectedLanguage('coming soon')
                else
                    setSelectedLanguageCode(
                        `Failed to load data: ${error.message}`
                    );
            })
        };
        fetchData();
    }, [selectedLanguage, structureName]); // This will re-fetch when selectedLanguage changes

    const copyToClipboard = (text) => () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Copied to clipboard:', text);
            })
            .catch(err => {
                console.log('Failed to copy:', err);
            });
    };

    return (
        <>
            <Card>
                <div className="card-header" >
                    <div style={{ design: 'flex', flexDirection: 'row' }}>
                        <h5>
                            <Button
                                variant="secondary"
                                onClick={() => copyToClipboard(selectedLanguageCode)}
                                style={{ marginRight: '1rem' }}
                            >
                                📄
                            </Button>
                            {structureName}
                        </h5>
                    </div>
                    <div>
                        <CodeLanguageSelector
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            collapseCodeView={() => { toggleOpen(!open) }}
                            isCodeViewOpen={open}
                            closeTheCard={closeCard}
                            copyToClipboard={copyToClipboard(selectedLanguageCode)}
                        />
                    </div>
                </div>
                <div className={open ? 'collapse.show' : 'collapse'}>
                    <div className="card-body" >
                        <CodeViewWindow
                            selectedLanguage={selectedLanguage}
                            selectedLanguageCode={selectedLanguageCode}
                        />
                    </div>
                </div>
            </Card >
        </>
    );
};
CodeCard.propTypes = {
    structureName: PropTypes.string.isRequired,
    closeCard: PropTypes.func.isRequired
};

export default CodeCard;
