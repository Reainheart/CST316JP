import { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Node from "./Node/Node";
import Pointer from "./Pointer/Pointer";
import Array from "./Array/Array";
import LinkedList from "./LinkedList/LinkedList";
import "./canvasComponent.css";


const RADIUS = 40
const degrees = [];
const THRESHOLD = 50;
for (let angle = 0; angle < 360; angle++) {
    degrees.push(angle);
}

const CanvasComponent = ({ objectToDraw, HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes
    const [pointers, setPointers] = useState([]); // State to track pointers
    const [arrays, setArrays] = useState([]); // State to track pointers
    const [linkedLists, setLinkedLists] = useState([]); // State to track the linked lists
    const selectedObjects = useRef(new Map()); // State to track selected objects
    // Purely by definition, not an object
    const trees = useRef(new Map()); // A map of trees on canvas

    const findObjectOnCanvasById = (id) => {
        for (const node of nodes) {
            if (node.id == id) {
                return node;
            }
        }
        return null
    };

    const handleCanvasClick = (event) => {

        if (selectedObjects.length !== 0) {
            selectedObjects.current.clear()
        }
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - 40; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top + 60;

        if (y < THRESHOLD + 50 || y > rect.height - THRESHOLD + 10) {
            return;
        }

        drawCurrentObjectAt(x, y)
    }

    const drawCurrentObjectAt = (x, y) => {
        console.log(objectToDraw)
        switch (objectToDraw) {
            case 'Node':
                drawNewNode(x, y)
                break;
            case 'Array':
                drawNewArray(x, y)
                break;
            case 'Linked List':
                drawNewLinkedList(x, y)
                break;
        }
    }

    const drawNewNode = (x, y) => {
        // Adds a new node. Each node has a unique key/id
        const newNode = { id: Math.random(), x, y, text: "Node" };
        setNodes([...nodes, newNode]);
    }
    const drawNewArray = (x, y) => {
        // Adds a new node. Each node has a unique key/id
        const newArray = { id: Math.random(), x, y, text: "Array" };
        setArrays([...arrays, newArray]);
    }
    const drawNewLinkedList = (x, y) => {
        // Adds a new linked list object
        const newLinkedList = { id: Math.random(), x, y, text: "Linked List" };
        setLinkedLists([...linkedLists, newLinkedList]);
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
                onClick={handleCanvasClick}
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
            {arrays.map((node) => (
                <Array
                    key={node.id}
                    name={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    onClick={handleObjectClick(node.id)}
                    isSelected={selectedObjects.current.has(node.id)}
                />
            ))}
            {linkedLists.map((node) => (
                <LinkedList
                    key={node.id}
                    name={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    
                />
            ))}
        </>
    );
};
CanvasComponent.propTypes = {
    HomeWidth: PropTypes.number.isRequired,
    HomeHeight: PropTypes.number.isRequired,
    objectToDraw: PropTypes.string.isRequired
};

export default CanvasComponent;
