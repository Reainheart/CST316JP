import { useState, useEffect } from "react";
import "./home.css";
import Header from "./../header/Header";

import CanvasComponent from "./Components/Canvas/CanvasComponent"
import LearningToolMenu from "./Components/Learning-Tool-Menu/Learning-Tool-Menu"
import Toolbar from "./Components/Toolbar/Toolbar";

const Home = () => {

    const headerHeight = 56;
    const [objectToDraw, setObjectToDraw] = useState('Node');
    const [canvasWidth, setcanvasWidth] = useState(window.innerWidth*6/8);
    const [canvasHeight, setcanvasHeight] = useState(window.innerHeight-headerHeight);
    const [learningToolMenuWidth, setlearningToolMenuWidth] = useState(window.innerWidth*2/8);
    const [learningToolMenuHeight, setlearningToolMenuHeight] = useState(window.innerHeight-headerHeight);

    const onReSize = () => {
        setcanvasWidth(window.innerWidth*6/8);
        setcanvasHeight(window.innerHeight-headerHeight);
        setlearningToolMenuWidth(window.innerWidth*2/8);
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
            <Toolbar setSelectStructure={setObjectToDraw}/>
            <div className="flex-container">
                <CanvasComponent className="canvas" objectToDraw={objectToDraw} HomeWidth={canvasWidth} HomeHeight={canvasHeight}/>
                <LearningToolMenu className="learning-tool-menu" HomeWidth={learningToolMenuWidth} HomeHeight={learningToolMenuHeight}/>
            </div>
        </div>
    );
};

export default Home;
