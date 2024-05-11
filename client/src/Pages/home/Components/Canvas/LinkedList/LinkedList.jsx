import React from "react";
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";

const LinkedList = ({ x, y }) => {
    // Define the positions of the nodes
    const nodePositions = [
        { x: x, y: y },
        { x: x + 150, y: y },
        { x: x + 300, y: y }
    ];

    return (
        <>
            {nodePositions.map((position, index) => (
                <Node
                    key={`node_${index}`}
                    x={position.x}
                    y={position.y}
                    text={`Node ${index + 1}`}
                />
            ))}
            <Pointer
                from_x={nodePositions[0].x}
                from_y={nodePositions[0].y}
                to_x={nodePositions[1].x}
                to_y={nodePositions[1].y}
            />
            <Pointer
                from_x={nodePositions[1].x}
                from_y={nodePositions[1].y}
                to_x={nodePositions[2].x}
                to_y={nodePositions[2].y}
            />
        </>
    );
};

export default LinkedList;

//below is to help fix the pointers above in their positioning: delete when issue is resolved
//id: Math.floor(Math.random() * 999999),
//from_x: fromObject.x + RADIUS,
//from_y: fromObject.y + RADIUS,
//to_x: toObject.x + RADIUS,
//to_y: toObject.y + RADIUS,
//connectedFromObject: fromObject,
//connectedToObject: toObject