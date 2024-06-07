import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ArrayNode from '../Array/ArrayNode';
import './Queue.css';

const Queue = ({ name, x, y, text, getNewObject, selected, toggleSelection, getPointer, removeMe }) => {
    const [queueData, setQueueData] = useState([]);
    const [, setUpdate] = useState(0); // State to trigger re-renders
    const selectedSubnodes = useRef(new Map());
    const [content, setContent] = useState(text);
    const [inputIsHidden, setInputIsHidden] = useState(true);

    useEffect(() => {
        setInputIsHidden(true); // Hide the input initially or when the node is deselected
    }, [selected]);

    const handleQueueClick = (event) => {
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

    const amISelected = (id) => {
        return selectedSubnodes.current.has(id);
    };
    const toggleSubnodeSelection = (id) => {
        console.log('Queue::toggleSubnodeSelection::' + id);
        if (selectedSubnodes.current.has(id)) {
            selectedSubnodes.current.delete(id);
            console.log('Queue::toggleSubnodeSelection::Removed::' + id);
        } else {
            selectedSubnodes.current.set(id, true);
            console.log('Queue::toggleSubnodeSelection::Added::' + id);
        }
        setUpdate(prev => prev + 1); // Force re-render
    };

    const triggerEdit = (e) => {
        e.stopPropagation();
        setInputIsHidden(false);
    };

    const pushToQueue = () => {
        const newQueueNode = getNewObject(x, y, 'null', 'Queue Node');
        const newQueueNodeId = newQueueNode.id;
        newQueueNode.text = newQueueNodeId
        setQueueData([...queueData, newQueueNode]);
    };

    const popFromQueue = () => {
        setQueueData(queueData.slice(1, queueData.length));
    };

    const removeArrayNode = (remove_id) => {
        setQueueData(prevNodes => prevNodes.filter(node => node.id !== remove_id))
    };

    return (
        <div>
            {selected && (
                <div className="queue-options" style={{ left: x - 36, top: y }}>
                    <button onClick={triggerEdit}>✎</button>
                    <button onClick={removeMe}>␥</button>
                    <button onClick={getPointer}>→</button>
                </div>
            )}
            <input
                style={{ left: x - 50, top: y - 50 }}
                hidden={inputIsHidden}
                className="changeContent"
                type="text"
                value={content}
                onInput={handleChange}
                onKeyDown={handleKeyDown}
            />
            <div className={`queue ${selected ? 'selected-queue' : ''}`} style={{ left: x, top: y }}>
            <h3 onClick={handleQueueClick}>
                {content}
            </h3>
                <div className='queue-functions'>
                    <button onClick={pushToQueue}>Enqueue</button>
                    <button onClick={popFromQueue}>Dequeue</button>
                </div>
                <div className="queue-container">

                    {queueData.map((node, index) => (
                        <ArrayNode
                            key={node.id}
                            name={node.id}
                            display_index={index}
                            display_text={node.text}
                            selected={amISelected(node.id)}
                            toggleSelection={toggleSubnodeSelection}
                            removeMe={() => removeArrayNode(node.id)}
                        />
                    ))}

                </div>
            </div>
        </div>

    );
};
Queue.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    getNewObject: PropTypes.func,
    removeArrayNode: PropTypes.func,
    selected: PropTypes.bool,
    toggleSelection: PropTypes.func,
    getPointer: PropTypes.func,
    removeMe: PropTypes.func,
};

export default Queue;
