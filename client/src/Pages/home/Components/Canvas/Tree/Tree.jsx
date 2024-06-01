import React from 'react';
import PropTypes from 'prop-types'
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";

const Tree = ({ name, onClick, nodes, pointers }) => {

        // Define the positions of the nodes
        const handleNodeClick = (event) => {
            // Prevents onClick from bubbling to the parent if it's nested
            event.stopPropagation();
    
            if (onClick) {
                onClick(event);
            }
            console.log('::TreeHandleNodeClick::')
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
                    onClick={handleNodeClick}
                    isSelected={node.isSelected}
                />
            ))}
        </>
    );
};

Tree.propTypes = {
    name: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    nodes: PropTypes.array,
    pointers: PropTypes.array
};

export default Tree;