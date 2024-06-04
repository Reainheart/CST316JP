import { useState, useEffect, useRef } from "react";
import "./home.css";
import Header from "./../header/Header";

import CanvasComponent from "./Components/Canvas/CanvasComponent"
import LearningToolMenu from "./Components/Learning-Tool-Menu/Learning-Tool-Menu"
import Toolbar from "./Components/Toolbar/Toolbar";

const Home = () => {
    const headerHeight = 86;
    const toolbarHeight = 46;

    const [objectToDraw, setObjectToDraw] = useState('Node');
    const [canvasObjects, setCanvasObjects] = useState([]);
    const [canvasWidth, setcanvasWidth] = useState(window.innerWidth * 6 / 8);
    const [canvasHeight, setcanvasHeight] = useState(window.innerHeight - headerHeight - toolbarHeight);

    // Map to track all objects and Interacts with CodeView
    const drawnCanvasObjects = useRef(new Map())
    const [learningToolMenuWidth, setlearningToolMenuWidth] = useState(window.innerWidth * 2 / 8);
    const [learningToolMenuHeight, setlearningToolMenuHeight] = useState(window.innerHeight - headerHeight - toolbarHeight - 10);

    const onReSize = () => {
        setcanvasWidth(window.innerWidth * 6 / 8);
        setcanvasHeight(window.innerHeight - headerHeight - toolbarHeight);
        setlearningToolMenuWidth(window.innerWidth * 2 / 8);
        setlearningToolMenuHeight(window.innerHeight - headerHeight - toolbarHeight);
    };
    const handleClick = () => {
        var allObjects = Array.from(drawnCanvasObjects.current.values());
        var getCanvasObjects = (objects) => {
            var uniqueObjects = []
            objects.forEach(element => {
                if (!uniqueObjects.includes(element.type)){
                    uniqueObjects.push(element.type)
                }
            });
            return uniqueObjects;
        }
        setCanvasObjects(Array.from(getCanvasObjects(allObjects)));
    };

    useEffect(() => {
        // set canvas size based on the window size
        window.addEventListener("resize", onReSize);

        return () => window.removeEventListener("resize", onReSize);
    }, []);

    return (
        <div onClick={handleClick}>
            <Header />
            <Toolbar setSelectStructure={setObjectToDraw} />
            <div className="flex-container">
                <CanvasComponent className="canvas" drawnCanvasObjects={drawnCanvasObjects} objectToDraw={objectToDraw} HomeWidth={canvasWidth} HomeHeight={canvasHeight} />
                <LearningToolMenu className="learning-tool-menu" HomeWidth={learningToolMenuWidth} HomeHeight={learningToolMenuHeight} CanvasObjects={canvasObjects} />
            </div>
        </div>
    );
};

export default Home;
