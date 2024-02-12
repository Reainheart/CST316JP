import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { CanvasComponent } from "./Components"

const Home = () => {
    return (
        <>
            <div>
            <CanvasComponent />
            </div>
        </>
    );
};

export default Home;
