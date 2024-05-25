import React from 'react';
import PropTypes from 'prop-types'
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";

const Tree = ({ name, nodes, pointers }) => {
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
                isSelected={node.isSelected}
            />
        ))}

    </>
  );
};

Tree.propTypes = {
    name: PropTypes.number.isRequired,
    nodes: PropTypes.array,
    pointers: PropTypes.array
};

export default Tree;