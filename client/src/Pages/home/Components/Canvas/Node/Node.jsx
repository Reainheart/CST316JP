import { useState, useRef, useEffect } from "react";
import "./Node.css";
import PropTypes from 'prop-types'

const Node = ({ x, y, text, onClick, isSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const nodeRef = useRef(null);

    // Optional: Use effect to handle actions when isSelected changes
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
                    <div className="node-options" style={{ left: x-10.5, top: y-35 }}>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div className="selected-node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}> 
                        <p>{text}</p>
                    </div>
                </div>
            ) : (
                <div className="node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}>
                    <p>{text}</p>
                </div>
            )}
        </>
    );
};
Node.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.func
};
export default Node;
