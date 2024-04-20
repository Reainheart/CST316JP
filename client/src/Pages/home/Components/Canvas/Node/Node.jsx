import { useState, useRef, useEffect } from "react";
import AnchorPoint from "../AnchorPoint/AnchorPoint";
import "./Node.css";
import PropTypes from 'prop-types'

const RADIUS = 30
const degrees = [];

for (let angle = 0; angle < 360; angle++) {
    degrees.push(angle);
}

// Function to calculate point on circumference of a circle given angle
function anchorPointsOnCircle(angleInDegrees, centerX, centerY) {
    // Convert angle from degrees to radians
    const angleInRadians = angleInDegrees * Math.PI / 180;

    const x = (centerX + RADIUS) + RADIUS * Math.cos(angleInRadians);
    const y = (centerY + RADIUS) + RADIUS * Math.sin(angleInRadians);

    return { x, y };
}

const Node = ({ name, x, y, text, onClick, isSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const nodeRef = useRef(null);

    useEffect((isSelected) => {
        setIsActive(isSelected)
    }, [isSelected]);

    const handleNodeClick = (event) => {
        // Prevents onClick from bubbling to the parent if it's nested
        event.stopPropagation();

        setIsActive(!isActive);
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <>
            {isActive ? (
                <div>
                    <div className="node-options" style={{ left: x - 10.5, top: y - 35 }}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    {degrees.map((angle) => (
                        <AnchorPoint
                            key={'node_' + name + '_ap_' + angle}
                            x={anchorPointsOnCircle(angle, x, y).x}
                            y={anchorPointsOnCircle(angle, x, y).y}
                        />
                    ))}
                    <div className="selected-node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}>
                        <p>{text}</p>
                    </div>
                </div>
            ) : (
                <div>
                    {degrees.map((angle) => (
                        <AnchorPoint
                            key={'node_' + name + '_ap_' + angle}
                            x={anchorPointsOnCircle(angle, x, y).x}
                            y={anchorPointsOnCircle(angle, x, y).y}
                        />
                    ))}
                    <div className="node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}>
                        <p>{text}</p>
                    </div>
                </div>
            )}
        </>
    );
};
Node.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool
};
export default Node;
