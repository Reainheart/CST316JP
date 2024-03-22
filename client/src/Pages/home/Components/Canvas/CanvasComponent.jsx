import React, { useState, useRef } from "react";
import Node from "./Node/Node";
import "./canvasComponent.css";

const CanvasComponent = ({ HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes

    const handleClick = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - 40; // Centering the node (node's width and height are 80px)
        const y = event.clientY - rect.top;

        // Adds a new node. Each node has a unique key/id
        const newNode = { id: Math.random(), x, y, text: "Node" };
        setNodes([...nodes, newNode]);
    };

    // Function to handle node click (remove the node upon user click)
    const handleNodeClick = (id) => (event) => {
        event.stopPropagation();
        setNodes(nodes.filter((node) => node.id !== id));
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                width={HomeWidth}
                height={HomeHeight}
                onClick={handleClick}
            />
            {nodes.map((node) => (
                <Node
                    key={node.id}
                    x={node.x}
                    y={node.y}
                    text={node.text}
                    onClick={handleNodeClick(node.id)}
                />
            ))}
        </>
    );
};

export default CanvasComponent;
