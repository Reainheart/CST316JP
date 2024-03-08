import React, { useState, useEffect } from "react";
import "./home.css";

import CanvasComponent from "./Components/Canvas/CanvasComponent";
import CodeView from "./Components/Learning-Tool-Menu/Code-View/Code-View";
import LearningToolMenu from "./Components/Learning-Tool-Menu/Learning-Tool-Menu-View/Learning-Tool-Menu/Learning-Tool-Menu";

const Home = () => {
    return (
        <>
            <div className="flex-container">
                <CanvasComponent className="canvas" />
                <LearningToolMenu className="learning-tool-menu" />
            </div>
        </>
    );
};

export default Home;
