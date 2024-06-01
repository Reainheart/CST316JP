import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QueueNode from './QueueNode';
import './Queue.css';

const Queue = ({ x, y, text, onClick, isSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [queueData, setQueueData] = useState([]);

    useEffect(() => {
        setIsActive(isSelected);
    }, [isSelected]);

    const handleQueueNodeClick = (event) => {
        event.stopPropagation();
        setIsActive(!isActive);
        if (onClick) {
            onClick(event);
        }
    };

    const pushToQueue = () => {
        let newNode = { text: `added ${queueData.length}` };
        setQueueData([...queueData, newNode]);
    };

    const popFromQueue = () => {
        setQueueData(queueData.slice(1, queueData.length));
    };

    return (
        <div className={`queue ${isSelected ? 'selected-queue' : ''}`} style={{ left: x, top: y }}>
            <h3>{text}</h3>
            <div className="queue-container">
                <button onClick={popFromQueue}>Pop</button>
                {queueData.map((node, index) => (
                    <QueueNode
                        key={index}
                        display_index={index}
                        display_text={node.text}
                        onClick={handleQueueNodeClick}
                    />
                ))}
                <button onClick={pushToQueue}>Push</button>

            </div>
        </div>
    );
};


Queue.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool
};

export default Queue;
