// Adjustments to CanvasComponent
import React, { useState, useRef } from "react";
import Node from "./Node/Node"; // Assuming you have a Node component
import "./canvasComponent.css";

const CanvasComponent = ({ HomeWidth, HomeHeight }) => {
    const canvasRef = useRef(null);
    const [nodes, setNodes] = useState([]); // State to track nodes

    const handleClick = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left - 50; // Centering the node, assuming node's width/height is 100px
        const y = event.clientY - rect.top - 50; // Adjust values as per your Node component's size

        // Adding a new node. Each node needs a unique key/id.
        const newNode = { id: Math.random(), x, y, text: "Node" };
        setNodes([...nodes, newNode]);
    };

    // Function to handle node click: remove the node
    const handleNodeClick = (id) => (event) => {
        event.stopPropagation(); // Prevent the canvas click from firing
        setNodes(nodes.filter((node) => node.id !== id));
    };

    return (
        <div
            style={{
                position: "relative",
                width: HomeWidth,
                height: HomeHeight,
            }}
        >
            <canvas
                ref={canvasRef}
                width={HomeWidth}
                height={HomeHeight}
                onClick={handleClick}
                style={{ position: "absolute" }}
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
        </div>
    );
};

export default CanvasComponent;
