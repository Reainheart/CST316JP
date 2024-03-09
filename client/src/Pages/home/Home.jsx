import { useState, useEffect } from "react";
import "./home.css";
import Header from "./../header/Header";

import CanvasComponent from "./Components/Canvas/CanvasComponent"

const Home = () => {

    const headerHeight = 61;
    const [canvasWidth, setcanvasWidth] = useState(window.innerWidth*2/3);
    const [canvasHeight, setcanvasHeight] = useState(window.innerHeight-headerHeight);


    const onReSize = () => {
        setcanvasWidth(window.innerWidth*2/3);
        setcanvasHeight(window.innerHeight-headerHeight);
    };


    useEffect(() => {
        // set canvas size based on the window size
        window.addEventListener("resize", onReSize);

        return () => window.removeEventListener("resize", onReSize);
    }, []);

    return (
        <div>
            <Header/>
            <div className="flex-container">
                <CanvasComponent className="canvas" HomeWidth={canvasWidth} HomeHeight={canvasHeight}/>
            </div>
        </div>
    );
};

export default Home;
