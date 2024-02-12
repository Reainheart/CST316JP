import React, { useState, useEffect } from "react";
import "./home.css";

import CanvasComponent from "./Components/Canvas/CanvasComponent"

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
