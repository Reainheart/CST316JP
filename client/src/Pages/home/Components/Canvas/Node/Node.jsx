import { useState, useRef, useEffect } from "react";
import AnchorPoint from "../AnchorPoint/AnchorPoint";
import "./Node.css";
import PropTypes from 'prop-types'

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
                    <AnchorPoint key={'node_' + name + '_ap_' + 1} x={x + 30} y={y - 10} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 2} x={x - 10} y={y + 30} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 3} x={x + 70} y={y + 30} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 4} x={x + 30} y={y + 70} />

                    <div className="selected-node" style={{ left: x, top: y }} onClick={handleNodeClick} ref={nodeRef}>
                        <p>{text}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <AnchorPoint key={'node_' + name + '_ap_' + 1} x={x + 30} y={y - 10} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 2} x={x - 10} y={y + 30} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 3} x={x + 70} y={y + 30} />
                    <AnchorPoint key={'node_' + name + '_ap_' + 4} x={x + 30} y={y + 70} />

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
