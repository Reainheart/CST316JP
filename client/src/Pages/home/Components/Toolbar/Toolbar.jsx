//import React from "react"; 
import PropTypes from 'prop-types'

import "./Toolbar.css";

//connects to home function for deciding on object to draw
const structures = [
    { name: 'Node' },
    { name: 'Array' },
    { name: 'Linked List' },
    { name: 'Tree' },
    { name: 'Stack' },
    { name: 'Queue' },
];

function Toolbar({ setSelectStructure }) {
    return (
        <div className="toolbar">
            {structures.map((structure) => (
                <button key={structure.name} onClick={() => setSelectStructure(structure.name)}>
                    {structure.icon}
                    {structure.name}
                </button>
            ))}

        </div>
    )
}
Toolbar.propTypes = {
    setSelectStructure: PropTypes.func.isRequired
};
export default Toolbar