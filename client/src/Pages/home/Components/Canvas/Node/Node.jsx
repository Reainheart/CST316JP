import { useState, useRef, useEffect } from "react";
import AnchorPoint from "../AnchorPoint/AnchorPoint";
import "./Node.css";
import PropTypes from 'prop-types';

const RADIUS = 30;
const degrees = [];

for (let angle = 0; angle < 360; angle += 45) {
    degrees.push(angle);
}

// Function to calculate point on the circumference of a circle given an angle
function anchorPointsOnCircle(angleInDegrees, centerX, centerY) {
    // Convert angle from degrees to radians
    const angleInRadians = angleInDegrees * Math.PI / 180;

    const x = (centerX + RADIUS) + RADIUS * Math.cos(angleInRadians);
    const y = (centerY + RADIUS) + RADIUS * Math.sin(angleInRadians);

    return { x, y };
}

const Node = ({ name, x, y, text, selected, toggleSelection, getPointer, removeMe }) => {
    const [content, setContent] = useState(text);
    const [inputIsHidden, setInputIsHidden] = useState(true);
    const nodeRef = useRef(null);

    useEffect(() => {
        setInputIsHidden(true); // Hide the input initially or when the node is deselected
    }, [selected]);

    const handleNodeClick = (event) => {
        // Prevents onClick from bubbling to the parent if it's nested
        event.stopPropagation();
        toggleSelection(name);
    };

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default action of adding a new line
            setInputIsHidden(true);
        }
    };

    const triggerEdit = (e) => {
        e.stopPropagation();
        setInputIsHidden(false);
    };

    return (
        <div>
            {selected && (
                <div className="node-options" style={{ left: x - 10.5, top: y - 35 }}>
                    <button onClick={triggerEdit}>✎</button>
                    <button onClick={removeMe}>␥</button>
                    <button onClick={getPointer}>→</button>
                </div>
            )}
            {degrees.map((angle) => (
                <AnchorPoint
                    key={'node_' + name + '_ap_' + angle}
                    x={anchorPointsOnCircle(angle, x, y).x}
                    y={anchorPointsOnCircle(angle, x, y).y}
                />
            ))}
            <div
                className="node"
                style={{ left: x, top: y, border: selected ? '2px solid blue' : '1px solid gray' }}
                onClick={handleNodeClick}
                ref={nodeRef}
            >
                <p className="nodeText">
                    {content}
                </p>
            </div>
            <input
                style={{ left: x - 50, top: y + 100 }}
                hidden={inputIsHidden}
                className="changeContent"
                type="text"
                value={content}
                onInput={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

Node.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    toggleSelection: PropTypes.func,
    getPointer: PropTypes.func,
    removeMe: PropTypes.func,
};

export default Node;
