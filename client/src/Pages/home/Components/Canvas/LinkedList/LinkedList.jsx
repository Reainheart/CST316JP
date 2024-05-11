import React from "react";
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";

const RADIUS = 40

const LinkedList = ({ x, y }) => {
    // Define the positions of the nodes
    const nodePositions = [
        { x: x, y: y },
        { x: x + 150, y: y },
        { x: x + 300, y: y }
    ];

    return (
        <>
            <Pointer
                from_x={nodePositions[0].x + RADIUS}
                from_y={nodePositions[0].y + RADIUS}
                to_x={nodePositions[1].x + RADIUS}
                to_y={nodePositions[1].y + RADIUS}
            />
            <Pointer
                from_x={nodePositions[1].x + RADIUS}
                from_y={nodePositions[1].y + RADIUS}
                to_x={nodePositions[2].x + RADIUS}
                to_y={nodePositions[2].y + RADIUS}
            />
            {nodePositions.map((position, index) => (
                <Node
                    key={`node_${index}`}
                    x={position.x}
                    y={position.y}
                    text={`Node ${index + 1}`}
                />
            ))}

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