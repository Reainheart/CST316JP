import { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Node from "./Node/Node";
import Pointer from "./Pointer/Pointer";
import "./canvasComponent.css";

const RADIUS = 40
const degrees = [];
const THRESHOLD = 50;
for (let angle = 0; angle < 360; angle++) {
    degrees.push(angle);
}

const CanvasComponent = ({ HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes
    const [pointers, setPointers] = useState([]); // State to track pointers
    const selectedObjects = useRef(new Map()); // State to track selected objects

    const findObjectOnCanvasById = (id) => {
        for (const node of nodes) {
            if (node.id == id) {
                return node;
            }
        }
        return null
    };

    const handleCavasClick = (event) => {

        if (selectedObjects.length !== 0) {
            selectedObjects.current.clear()
        }

        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - RADIUS; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top + RADIUS;


        if (y < THRESHOLD + RADIUS || y > rect.height - THRESHOLD + 10) {
            return;
        }

        // Adds a new node. Each node has a unique key/id
        const newNode = { id: Math.floor(Math.random() * 999999), x, y, text: "Node" };

        console.log(newNode)
        setNodes([...nodes, newNode]);
    };

    const handleCtrlClickOnObject = (id) => {
        //debugger
        // Deselect on self click 
        if (selectedObjects.current.has(id)) {
            return selectedObjects.current.delete(id);
        }
        const currentObject = findObjectOnCanvasById(id)

        // Shouldnt happen... but should be good
        if (currentObject != null) {
            // map the id of selected object
            selectedObjects.current.set(id, currentObject)
            console.log(selectedObjects.current.get(id).id + ' was added')
        } else {
            console.log('Current object not found')
        }
    }

    const handleObjectClick = (id) => (event) => {
        // console.log(event)
        // console.log(id)
        event.stopPropagation();

        event.ctrlKey ? handleCtrlClickOnObject(id) : handleClickOnObject(id)

        console.log(selectedObjects)
    };

    const handleClickOnObject = (id) => {
        //debugger
        // If the object is selected
        // Deselect on self click 
        if (selectedObjects.current.has(id)) {
            selectedObjects.current.clear()
            return selectedObjects.current.delete(id);
        }

        console.log(selectedObjects.current.size)
        const currentObject = findObjectOnCanvasById(id)

        switch (selectedObjects.current.size) {
            case 1:
                drawPointerFromObjectToObject(selectedObjects.current.keys().next().value, id)
                console.log(selectedObjects.current.size)
                break;
            default:
                selectedObjects.current.set(id, currentObject)
                console.log(selectedObjects.current.get(id).id + ' was added')
                console.log(selectedObjects.current.size)
                break;
        }
    }

    const drawPointerFromObjectToObject = (from_id, to_id) => {
        const fromObject = findObjectOnCanvasById(from_id)
        const toObject = findObjectOnCanvasById(to_id)

        const newPointer = {
            id: Math.floor(Math.random() * 999999),
            from_x: fromObject.x + RADIUS,
            from_y: fromObject.y + RADIUS,
            to_x: toObject.x + RADIUS,
            to_y: toObject.y + RADIUS,
            connectedFromObject: fromObject,
            connectedToObject: toObject
        }
        setPointers([...pointers, newPointer])
    }


    return (
        <>
            <canvas
                ref={canvasRef}
                width={HomeWidth}
                height={HomeHeight}
                onClick={handleCavasClick}
            />
            {pointers.map((pointer) => (
                <Pointer
                    key={pointer.id}
                    name={pointer.id}
                    from_x={pointer.from_x}
                    from_y={pointer.from_y}
                    to_x={pointer.to_x}
                    to_y={pointer.to_y}
                    connectedFromObject={pointer.connectedFromObject}
                    connectedToObject={pointer.connectedToObject}
                />
            ))}
            {nodes.map((node) => (
                <Node
                    key={node.id}
                    name={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    onClick={handleObjectClick(node.id)}
                    isSelected={selectedObjects.current.has(node.id)}
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
