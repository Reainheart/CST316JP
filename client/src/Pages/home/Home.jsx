import { useState, useEffect } from "react";
import "./home.css";
import Header from "./../header/Header";

import CanvasComponent from "./Components/Canvas/CanvasComponent"
import LearningToolMenu from "./Components/Learning-Tool-Menu/Learning-Tool-Menu"
const Home = () => {

    const headerHeight = 61;
    const [canvasWidth, setcanvasWidth] = useState(window.innerWidth*2/3);
    const [canvasHeight, setcanvasHeight] = useState(window.innerHeight-headerHeight);
    const [learningToolMenuWidth, setlearningToolMenuWidth] = useState(window.innerWidth*1/3);
    const [learningToolMenuHeight, setlearningToolMenuHeight] = useState(window.innerHeight-headerHeight);

    const onReSize = () => {
        setcanvasWidth(window.innerWidth*2/3);
        setcanvasHeight(window.innerHeight-headerHeight);
        setlearningToolMenuWidth(window.innerWidth*1/3);
        setlearningToolMenuHeight(window.innerHeight-headerHeight);
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
                <LearningToolMenu/>
            </div>
        </div>
    );
};

export default Home;
