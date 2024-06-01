import { useState, useRef, useEffect } from "react";
import AnchorPoint from "../AnchorPoint/AnchorPoint";
import "./Node.css";
import PropTypes from 'prop-types'

const RADIUS = 30
const degrees = [];

for (let angle = 0; angle < 360; angle = angle + 45) {
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

const Node = ({ name, x, y, text, onClick, isSelected, removeMe }) => {
    const [content, setContent] = useState(text);
    const [inputIsHidden, setInputIsHidden] = useState(true);
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


    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents the default action of adding a new line
            console.log('Enter key pressed');
            setInputIsHidden(true);
        }
    };

    const triggerEdit = (e) => {
        e.stopPropagation();
        setInputIsHidden(false);
    }

    return (
        <>
            <div>
                {isActive ? (
                    <div className="node-options" style={{ left: x - 10.5, top: y - 35 }}>
                        <button onClick={triggerEdit}>✎</button>
                        <button onClick={removeMe}>␥</button>
                        <button>→</button>
                    </div>
                ) : (
                    <>
                    </>
                )}

                {degrees.map((angle) => (
                    <AnchorPoint
                        key={'node_' + name + '_ap_' + angle}
                        x={anchorPointsOnCircle(angle, x, y).x}
                        y={anchorPointsOnCircle(angle, x, y).y}
                    />
                ))}
                <div className="node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}>
                    <p className="nodeText">
                        {content}
                    </p>
                </div>
                <input
                    style={{ left: x - 50, top: y + 100 }}
                    hidden={inputIsHidden}
                    className="changeContent"
                    type="text"
                    onInput={handleChange} 
                    onKeyDown={handleKeyDown} />
            </div>
        </>
    );
};
Node.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
    removeMe: PropTypes.func,
};
export default Node;
