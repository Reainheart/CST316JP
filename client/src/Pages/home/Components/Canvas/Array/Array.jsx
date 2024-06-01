// import React from "react";
import ArrayNode from "./ArrayNode";
import PropTypes from 'prop-types'
import "./Array.css";
import { useState, useEffect } from "react";

const Array = ({ x, y, text, selected, toggleSelection, getPointer, removeMe }) => {
    const [arrayData, setArrayData] = useState([]);
    const [content, setContent] = useState(text);
    const [inputIsHidden, setInputIsHidden] = useState(true);

    useEffect(() => {
        setInputIsHidden(true); // Hide the input initially or when the node is deselected
    }, [selected]);

    const handleArrayClick = (event) => {
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

    const addToEndOfArray = () => {
        let ArrayNode = { text: `added  ${arrayData.length}` };
        setArrayData([...arrayData, ArrayNode])
    }
    const addToStartOfArray = () => {
        let ArrayNode = { text: `added ${arrayData.length}` };
        setArrayData([ArrayNode, ...arrayData])
    }

    return (
        <>
            {selected && (
                <div className="array-options" style={{ left: x - 10.5, top: y - 35 }}>
                    <button onClick={triggerEdit}>✎</button>
                    <button onClick={removeMe}>␥</button>
                    <button onClick={getPointer}>→</button>
                </div>
            )}
            <div
                className={selected ? "selected-array" : "array"}
                style={{ left: x, top: y, border: selected ? '2px solid blue' : '1px solid gray' }}
            >
                <h3>{content}</h3>

                <div
                    className="array-container"
                    onClick={handleArrayClick}>
                    <ArrayNode
                        key='start'
                        display_index='start'
                        display_text='+'
                        onClick={addToStartOfArray}
                    />
                    {arrayData.map((node, index) => (
                        <ArrayNode
                            key={index}
                            display_index={index}
                            display_text={node.text}
                        />
                    ))}
                    <ArrayNode
                        key='end'
                        display_index='end'
                        display_text='+'
                        onClick={addToEndOfArray}
                    />
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
        </>
    );
};
Array.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    toggleSelection: PropTypes.func,
    getPointer: PropTypes.func,
    removeMe: PropTypes.func,
}
export default Array;
