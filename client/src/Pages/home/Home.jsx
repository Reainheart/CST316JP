import React, { useState, useEffect } from "react";
import "./home.css";

import CanvasComponent from "./Components/Canvas/CanvasComponent"
import CodeView from "./Components/Learning-Tool-Menu/Code-View/Code-View";

const Home = () => {
    return (
        <>
            <div className="flex-container">
                <CanvasComponent className="canvas"/>
                <CodeView className="learning-tool-menu"/>
            </div>
        </>
    );
};

export default Home;
