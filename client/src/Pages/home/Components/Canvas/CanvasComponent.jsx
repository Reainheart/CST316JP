import { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Node from "./Node/Node";
import "./canvasComponent.css";

const CanvasComponent = ({ HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes
    const [selectedObjects, setSelectedObjects] = useState(new Map()); // State to track selected objects

    const handleCavasClick = (event) => {

        if (selectedObjects.length !== 0) {
            setSelectedObjects(new Map());
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - 40; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top;

        // Adds a new node. Each node has a unique key/id
        const newNode = { id: Math.floor(Math.random() * 999999), x, y, text: "Node" };

        console.log(newNode)
        setNodes([...nodes, newNode]);

    };

    const findObjectOnCanvasById = (id) => {

        for (const node of nodes) {
            console.log(node);
            if (node.id == id) {
                return node;
            }
        }

        return null

    }

    const handleClickOnObject = (id) => {
        //debugger
        // If the object is selected
        if (selectedObjects.has(id)) {
            return selectedObjects.delete(id);
        }
        const currentObject = findObjectOnCanvasById(id)

        // Shouldnt happen... but should be good
        if (currentObject != null) {
            // map the id of selected object
            selectedObjects.set(id, currentObject)
            console.log(selectedObjects[id] + ' was added')
        } else {
            console.log('Current object not found')
        }

    }

    const handleObjectClick = (id) => (event) => {
        // console.log(event)
        // console.log(id)
        event.stopPropagation();

        handleClickOnObject(id);

        console.log(selectedObjects)
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                width={HomeWidth}
                height={HomeHeight}
                onClick={handleCavasClick}
            />
            {nodes.map((node) => (
                <Node
                    key={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    onClick={handleObjectClick(node.id)}
                />
            ))}
        </>
    );
};
CanvasComponent.propTypes = {
    HomeWidth: PropTypes.number.isRequired,
    HomeHeight: PropTypes.number.isRequired
};

export default CanvasComponent;
