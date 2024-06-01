import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StackNode from './StackNode';
import './Stack.css';

const Stack = ({ x, y, text, onClick, isSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [stackData, setStackData] = useState([]);

    useEffect(() => {
        setIsActive(isSelected);
    }, [isSelected]);

    const handleStackNodeClick = (event) => {
        event.stopPropagation();
        setIsActive(!isActive);
        if (onClick) {
            onClick(event);
        }
    };

    const pushToStack = () => {
        let newNode = { text: `added ${stackData.length}` };
        setStackData([...stackData, newNode]);
    };

    const popFromStack = () => {
        setStackData(stackData.slice(0, -1));
    };

    return (
        <div className={`stack ${isSelected ? 'selected-stack' : ''}`} style={{ left: x, top: y }}>
            <h3>{text}</h3>
            <div className="stack-container">
                <button onClick={pushToStack}>Push</button>
                {stackData.map((node, index) => (
                    <StackNode
                        key={index}
                        display_index={index}
                        display_text={node.text}
                        onClick={handleStackNodeClick}
                    />
                ))}
                <button onClick={popFromStack}>Pop</button>
            </div>
        </div>
    );
};


Stack.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool
};

export default Stack;
