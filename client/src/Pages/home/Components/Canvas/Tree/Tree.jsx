import React from 'react';
import PropTypes from 'prop-types'
import Node from "../Node/Node";
import Pointer from "../Pointer/Pointer";

const Tree = ({ name, root, pointers }) => {
    return (
      <>
        {root && (
          <Node
            key={root.id}
            name={root.id}
            x={root.x}
            y={root.y}
            text={root.text}
          />
        )}
        {pointers.map((pointer) => (
          <Pointer
            key={pointer.id}
            from_x={pointer.from_x}
            from_y={pointer.from_y}
            to_x={pointer.to_x}
            to_y={pointer.to_y}
          />
        ))}
      </>
    );
  };

Tree.PropTypes = {
    name: PropTypes.number.isRequired,
    root: PropTypes.object.isRequired,
    pointers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tree;