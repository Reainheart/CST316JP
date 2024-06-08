import { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Node from "./Node/Node";
import Pointer from "./Pointer/Pointer";
import Array from "./Array/Array";
import Queue from "./Queue/Queue";
import Stack from "./Stack/Stack"
import "./canvasComponent.css";

//Radius is the node's radius in pixels
//Degrees is for the amount of anchor points needed
//Threshold is a ui threshold so objects don't overlap with the toolbar 
const RADIUS = 40
const degrees = [];
const THRESHOLD = 65;
for (let angle = 0; angle < 360; angle++) {
    degrees.push(angle);
}

const CanvasComponent = ({ objectToDraw, drawnCanvasObjects, HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes
    const [, setUpdate] = useState(0); // State to trigger re-renders
    const [pointers, setPointers] = useState([]); // State to track pointers
    const [arrays, setArrays] = useState([]); // State to track pointers
    const [linkedLists, setLinkedLists] = useState([]); // State to track pointers
    const [trees, setTrees] = useState([]); // State to track trees
    const [stacks, setStacks] = useState([]); // State to track stacks
    const [queues, setQueues] = useState([]); // State to track stacks

    // Map to track selected objects
    const selectedObjects = useRef(new Map());

    const handleCanvasClick = (event) => {

        if (selectedObjects.length !== 0) {
            selectedObjects.current.clear()
        }
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - 40; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top + 60;

        //Making sure elements don't overlap with the canvas borders
        if (y < THRESHOLD + 50 || y > rect.height - THRESHOLD + 10) {
            console.log("Node placed in threshold")
        } else {
            drawNewObject(x, y, objectToDraw, objectToDraw)
        }
    }

    // To add a new object call get new Object
    const getNewObject = (x, y, objectText, objectType) => {

        // Takes a canvas position for x and y, the object to draw is also the display text 
        const newObject = {
            id: Math.floor(Math.random() * 999999),
            x: x,
            y: y,
            text: objectText,
            type: objectType
        };
        //Guarentee non-allocated ID
        //while the object id is in the current keys, we keep rolling
        while (drawnCanvasObjects.current.keys[newObject.id]) {
            newObject.id = Math.floor(Math.random() * 999999);
        }
        drawnCanvasObjects.current.set(newObject.id, newObject);

        return newObject
    }

    const getBlankPointer = () => {

        // Create default pointer
        const newPointer = {
            id: Math.floor(Math.random() * 999999),
            type: 'Pointer',
            from_x: 0,
            from_y: 0,
            to_x: 0,
            to_y: 0,
            from_ID: 0,
            to_ID: 0,
        }
        while (drawnCanvasObjects.current.keys[newPointer.id]) {
            newPointer.id = Math.floor(Math.random() * 999999);
        }
        drawnCanvasObjects.current.set(newPointer.id, newPointer)

        return newPointer
    }

    const drawPointerFromMeToSelectedID = (from_id) => () => {
        console.log(from_id)
        console.log()

        selectedObjects.current.keys().forEach((id) => {
            if (id != from_id) {
                const newPointer = getPointerObject(id, from_id);
                setPointers([...pointers, newPointer])
            }
        })
    }

    const getPointerObject = (from_id, to_id) => {
        //create defualt pointer
        const newPointer = getBlankPointer()

        //update the pointer to the object passed if it exists
        if (from_id) {
            const fromObject = drawnCanvasObjects.current.get(from_id)
            newPointer.from_ID = fromObject.id
            newPointer.from_x = fromObject.x + RADIUS
            newPointer.from_y = fromObject.y + RADIUS
            console.log('Canvas::getPointerObject::from_ID::' + fromObject.id)
        }

        //update the pointer to the object passed if it exists
        if (to_id) {
            const toObject = drawnCanvasObjects.current.get(to_id)
            newPointer.to_id = toObject.id
            newPointer.to_x = toObject.x + RADIUS
            newPointer.to_y = toObject.y + RADIUS
            console.log('Canvas::getPointerObject::to_ID::' + toObject.to_ID)
        }

        return newPointer
    }

    const getNewLinkedList = (x, y) => {

        // Start from X and Y, get the object for head buffer, value, and tail buffer node 
        const head = getNewObject(x, y, 'head value', 'Node');
        const dummy = getNewObject(x + 150, y, 'value', 'Node');
        const tail = getNewObject(x + 300, y, 'tail value', 'Node');

        // Draw the nodes, all nodes drawn MUST be drawn at the same time
        setNodes([...nodes, head, dummy, tail])

        // Get the pointers to build the object using IDs
        const headToDummy = getPointerObject(head.id, dummy.id);
        const dummyToTail = getPointerObject(dummy.id, tail.id);

        // Draw the pointers, all pointers drawn MUST be drawn at the same time
        setPointers([...pointers, headToDummy, dummyToTail]);

        // Build the New Linked list as a schema
        const newLinkedListSchema = {
            baseObject: getNewObject(x, y, 'Linked List', 'Linked List'),
            relatedNodeIDs: [
                head.id,
                dummy.id,
                tail.id
            ],
            relatedPointerIDs: [
                headToDummy.id,
                dummyToTail.id
            ]
        }

        // We don't render the schema, but we do track that there is an object for code generation
        setLinkedLists([...linkedLists, newLinkedListSchema]);

        return newLinkedListSchema.id
    }

    const getNewTree = (x, y) => {

        const root = getNewObject(x, y, 'Tree Root', 'Node');
        const leftChild = getNewObject(x - 100, y + 100, 'Left Child', 'Node');
        const rightChild = getNewObject(x + 100, y + 100, 'Right Child', 'Node');

        // Draw the nodes, all nodes drawn MUST be drawn at the same time
        setNodes([...nodes, root, leftChild, rightChild]);

        const rootToleftChild = getPointerObject(root.id, leftChild.id);
        const rootTorightChild = getPointerObject(root.id, rightChild.id);

        // Draw the pointers, all pointers drawn MUST be drawn at the same time
        setPointers([...pointers, rootToleftChild, rootTorightChild]);

        // Build the New Tree as a schema
        const newTree = {
            baseObject: getNewObject(x, y, 'Tree', 'Tree'),
            relatedNodeIDs: [
                root.id,
                leftChild.id,
                rightChild.id
            ],
            relatedPointerIDs: [
                rootToleftChild.id,
                rootTorightChild.id
            ]
        };

        setTrees([...trees, newTree]);

        return newTree.id;
    };

    // Adding a new type here is how we can draw a new object,
    // This can also be passed to objects Like Array to draw their new items

    const drawNewObject = (x, y, objectText, objectType) => {
        // Add to the arrays to render the objects

        var newObject = getNewObject(x, y, objectText, objectType)

        console.log('Canvas::drawNewObject::' + newObject.id + '::type::' + newObject.type)
        switch (objectType) {
            // Base objects
            case 'Node':
                // Assign the id to track the objects
                setNodes([...nodes, newObject]);
                return newObject.id;
            case 'Array':
                // Assign the id to track the objects
                setArrays([...arrays, newObject]);
                return newObject.id;
            case 'Linked List':
                return getNewLinkedList(x, y)
            case 'Tree':
                return getNewTree(x, y);
            case 'Stack':
                setStacks([...stacks, newObject]);
                return newObject.id;
            case 'Queue':
                setQueues([...queues, newObject]);
                return newObject.id;
            default:
                console.warn('Unknown type:', objectType);
        }
    };


    const removeCanvasObject = (id) => (event) => {
        event.stopPropagation();
        console.log('Canvas::RemoveCanvasObject::' + id + '::type::' + drawnCanvasObjects.current.get(id).type)
        const objectType = drawnCanvasObjects.current.get(id).type;
        drawnCanvasObjects.current.delete(id)
        switch (objectType) {
            case 'Node':
                setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
                setPointers(prevPointers => prevPointers.filter(pointer => pointer.from_ID !== id));
                break;
            case 'Pointer':
                setPointers(prevPointers => prevPointers.filter(pointer => pointer.id !== id));
                break;
            case 'Array':
                setArrays(prevArrays => prevArrays.filter(array => array.id !== id));
                break;
            case 'LinkedList':
                setLinkedLists(prevLinkedLists => prevLinkedLists.filter(linkedList => linkedList.id !== id));
                break;
            case 'Tree':
                setTrees(prevTrees => prevTrees.filter(tree => tree.id !== id));
                break;
            case 'Stack':
                setStacks(prevStacks => prevStacks.filter(stack => stack.id !== id));
                break;
            case 'Queue':
                setQueues(prevQueues => prevQueues.filter(queue => queue.id !== id));
                break;
            default:
                console.warn('Unknown type:', objectType);
        }
    }

    const handleObjectClick = (id) => (event) => {
        // console.log(event)
        // console.log(id)
        event.stopPropagation();

        // event.ctrlKey ? handleCtrlClickOnObject(id) : handleClickOnObject(id)
        toggleSelection(id);
        console.log(selectedObjects);
    };

    // Functional code to track selection state on Nodes
    const amISelected = (id) => {
        return selectedObjects.current.has(id);
    };

    const toggleSelection = (id) => {
        console.log('Canvas::ToggleSelection::' + id);
        if (selectedObjects.current.has(id)) {
            selectedObjects.current.delete(id);
            console.log('Canvas::ToggleSelection::Removed::' + id);
        } else {
            selectedObjects.current.set(id, drawnCanvasObjects.current.get(id));
            console.log('Canvas::ToggleSelection::Added::' + id);
        }
        setUpdate(prev => prev + 1); // Force re-render
    };

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
                    to_ID={pointer.to_ID}
                    from_ID={pointer.from_ID}
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
                    selected={amISelected(node.id)}
                    toggleSelection={toggleSelection}
                    removeMe={removeCanvasObject(node.id)}
                    getPointer={drawPointerFromMeToSelectedID(node.id)}
                />
            ))}
            {arrays.map((array) => (
                <Array
                    key={array.id}
                    name={array.id}
                    x={array.x}
                    y={array.y}
                    text={array.text}
                    onClick={handleObjectClick(array.id)}
                    selected={amISelected(array.id)}
                    toggleSelection={toggleSelection}
                    removeMe={removeCanvasObject(array.id)}
                    getPointer={drawPointerFromMeToSelectedID(array.id)}
                    getNewObject={getNewObject}
                />
            ))}
            {stacks.map((stack) => (
                <Stack
                    key={stack.id}
                    name={stack.id}
                    x={stack.x}
                    y={stack.y}
                    text={stack.text}
                    onClick={handleObjectClick(stack.id)}
                    selected={amISelected(stack.id)}
                    toggleSelection={toggleSelection}
                    removeMe={removeCanvasObject(stack.id)}
                    getPointer={drawPointerFromMeToSelectedID(stack.id)}
                    getNewObject={getNewObject}
                />
            ))}
            {queues.map((queue) => (
                <Queue
                    key={queue.id}
                    name={queue.id}
                    x={queue.x}
                    y={queue.y}
                    text={queue.text}
                    onClick={handleObjectClick(queue.id)}
                    selected={amISelected(queue.id)}
                    toggleSelection={toggleSelection}
                    removeMe={removeCanvasObject(queue.id)}
                    getPointer={drawPointerFromMeToSelectedID(queue.id)}
                    getNewObject={getNewObject}
                />
            ))}
        </>
    );
};
CanvasComponent.propTypes = {
    HomeWidth: PropTypes.number.isRequired,
    HomeHeight: PropTypes.number.isRequired,
    objectToDraw: PropTypes.string.isRequired,
    drawnCanvasObjects: PropTypes.any.isRequired
};

export default CanvasComponent;
