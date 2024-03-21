import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Instruct-Page.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Header from "./../header/Header";


const InstructionalPage = () => {
    return (
        <div>
            <Header/>
            <div>
                <h1>Learn</h1>
                <p>Instructions here</p>

                <div className="button-group-container">
                    <div className="button-group">
                        <Button size="large" variant="outline-dark">
                            Node
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Standard Linked List
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Doubly Linked List
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Circlular Linked List
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Doubly Circular Linked List
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Binary Search Tree
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Binary Tree
                        </Button>
                        <Button size="large" variant="outline-dark">
                            General Tree
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Red Black Tree
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Segment Tree
                        </Button>
                        <Button size="large" variant="outline-dark">
                            Treap
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructionalPage;
