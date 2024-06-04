import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Instruct-Page.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Header from "./../header/Header";

const InstructionalPage = () => {
    const [selectedStructure, setSelectedStructure] = useState("");
    const [structureInfo, setStructureInfo] = useState("");

    useEffect(() => {
        if (selectedStructure) {
            console.log(
                `http://localhost:3000/getLearnPageInfo?structure=About ${selectedStructure}`
            );
            fetch(
                `http://localhost:3000/getLearnPageInfo?structure=About ${selectedStructure}s`
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.length > 0) {
                        setStructureInfo(data[0].information);
                    } else {
                        setStructureInfo("No information available");
                    }
                })
                .catch((error) => console.error("Error fething data:", error));
        }
    }, [selectedStructure]);

    const handleSelectStructure = (structure) => {
        setSelectedStructure(structure);
    };

    return (
        <div className="instruct-page-content">
            <Header />
            <div>
                <h1>Learn</h1>

                <div className="button-group-container">
                    <div className="button-group">
                        {[
                            "Node",
                            "Array",
                            "Linked List",
                            "Doubly Linked List",
                            "Circular Linked List",
                            "Doubly Circular Linked List",
                            "Binary Search Tree",
                            "Binary Tree",
                            "General Tree",
                            "Red Black Tree",
                            "Segment Tree",
                            "Treap",
                        ].map((structure) => (
                            <Button
                                key={structure}
                                size="large"
                                variant="outline-dark"
                                onClick={() => handleSelectStructure(structure)}
                            >
                                {structure}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="structure-info">
                    {structureInfo && <p>{structureInfo}</p>}
                </div>
            </div>
        </div>
    );
};

export default InstructionalPage;
