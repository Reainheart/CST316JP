/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./canvasComponent.css";

const CanvasComponent = ({HomeWidth, HomeHeight}) => {
    const canvasRef = useRef(null); // reference to the canvas element
    const structureData = useRef(new Map())

    // handle click event on the canvas (create a node or remove a node)
    // show popup if the mouse is inside the node
    // if node hasn't been created, create a node
    // if node has been created, remove the node
    const handleClick = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        console.log('Canvas cords' +x+','+y)
    };


    // render the canvas and the popup (if the mouse is inside the node)
    return (
        <>
            <canvas
                ref={canvasRef}
                width={HomeWidth}
                height={HomeHeight}
                onClick={handleClick}
            />
        </>
    );
};

export default CanvasComponent;
