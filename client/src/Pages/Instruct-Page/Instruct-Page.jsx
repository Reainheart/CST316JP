import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Instruct-Page.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const InstructionalPage = () => {
    return (
        <>
            <div>
                <h1>Learn</h1>
                <p>Instructions here</p>

                <div className="button-group">
                    <Button size="large" variant="outlined">
                        Node
                    </Button>
                    <Button size="large" variant="outlined">
                        Standard Linked List
                    </Button>
                    <Button size="large" variant="outlined">
                        Doubly Linked List
                    </Button>
                    <Button size="large" variant="outlined">
                        Circlular Linked List
                    </Button>
                    <Button size="large" variant="outlined">
                        Doubly Circular Linked List
                    </Button>

                    <Button size="large" variant="outlined">
                        Binary Search Tree
                    </Button>
                    <Button size="large" variant="outlined">
                        Binary Tree
                    </Button>
                    <Button size="large" variant="outlined">
                        General Tree
                    </Button>
                    <Button size="large" variant="outlined">
                        Red Black Tree
                    </Button>
                    <Button size="large" variant="outlined">
                        Segment Tree
                    </Button>
                    <Button size="large" variant="outlined">
                        Treap
                    </Button>
                </div>
            </div>
        </>
    );
};

export default InstructionalPage;
