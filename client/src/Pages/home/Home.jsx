import React, { useState, useEffect } from "react";
import "./home.css";

import CanvasComponent from "./Components/Canvas/CanvasComponent"

const Home = () => {
    return (
        <>
            <div>
                <CanvasComponent className="canvas"/>
                <span className="learning-tool-menu"> Menu here</span>
            </div>

        </>
    );
};

export default Home;
