import React from "react"; 
import "./Toolbar.css";

const structures = [
    { name: 'Node' },
    { name: 'Linked List' },
    { name: 'Pointer' },
    { name: 'Null Pointer' },
];

function Toolbar({ onSelectStructure }) {
    return (
        <div className="toolbar">
            {structures.map((structure) => (
                <button key={structure.name} onClick={() => onSelectStructure(structure.name)}>
                    {structure.icon}
                    {structure.name}
                </button>
            ))}

        </div>
    )
}

export default Toolbar