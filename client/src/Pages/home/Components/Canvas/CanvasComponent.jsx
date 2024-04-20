import { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Node from "./Node/Node";
import Pointer from "./Pointer/Pointer";
import "./canvasComponent.css";

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
        const x = event.clientX - rect.left - 40; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top + 60;
        
        const threshold = 50;
        if(y < threshold + 50 || y > rect.height - threshold + 10) {
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

        ClickObjectAction(id)
    }

    const drawPointerFromObjectToObject = (from_id, to_id) => {
        const fromObject = findObjectOnCanvasById(from_id)
        const from_x = fromObject.x
        const from_y = fromObject.y

        if (to_id) {
            const toObject = findObjectOnCanvasById(to_id)
            const to_x = toObject.x
            const to_y = toObject.y
            const newPointer = {
                id: Math.floor(Math.random() * 999999),
                from_x: from_x,
                from_y: from_y, 
                to_x: to_x,
                to_y: to_y, 
                connectedFromObject: fromObject,
                connectedToObject: toObject
            }
            setPointers([...pointers, newPointer])
        }else{
            const newPointer = {
                id: Math.floor(Math.random() * 999999),
                from_x: from_x,
                from_y: from_y, 
                to_x: from_x+50,
                to_y: from_y+50, 
                connectedFromObject: fromObject
            }
            setPointers([...pointers, newPointer])
        }
    }

    const ClickObjectAction = (id) => {
        console.log(selectedObjects.current.size) 
        const currentObject = findObjectOnCanvasById(id)


        switch (selectedObjects.current.size) {
            case 1: 
                drawPointerFromObjectToObject(selectedObjects.current.keys().next().value,id)
                console.log(selectedObjects.current.size)      
                break;
            default:
                selectedObjects.current.set(id, currentObject)
                console.log(selectedObjects.current.get(id).id + ' was added')
                console.log(selectedObjects.current.size)  
                break;   
        }
        
    }

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
                    name={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    onClick={handleObjectClick(node.id)}
                    isSelected={selectedObjects.current.has(node.id)}
                />
            ))}
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
        </>
    );
};
CanvasComponent.propTypes = {
    HomeWidth: PropTypes.number.isRequired,
    HomeHeight: PropTypes.number.isRequired
};

export default CanvasComponent;
