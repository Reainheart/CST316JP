import React, { useState } from "react";
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";
import PropTypes from 'prop-types';

const LinkedList = ({ nodes, pointers, onClick, isSelected }) => {

    // Define the positions of the nodes
    const handleNodeClick = (event) => {
        // Prevents onClick from bubbling to the parent if it's nested
        event.stopPropagation();

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <>
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
                    onClick={node.onClick}
                    isSelected={isSelected}
                />
            ))}

        </>
    );
};

LinkedList.propTypes = {
    nodes: PropTypes.array,
    pointers: PropTypes.array,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
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