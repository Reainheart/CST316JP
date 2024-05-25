// import React from "react";
import ArrayNode from "./ArrayNode";
import PropTypes from 'prop-types'
import "./Array.css";
import { useState, useEffect } from "react";

const Array = ({ x, y, text, onClick, isSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const [arrayData, setArrayData] = useState([]);

    //const nodeRef = useRef(null);

    useEffect((isSelected) => {
        setIsActive(isSelected)
    }, [isSelected]);

    const handleArrayNodeClick = (event) => {
        // Prevents onClick from bubbling to the parent if it's nested
        event.stopPropagation();


        setIsActive(!isActive);
        if (onClick) {
            onClick(event);
        }
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
            {isSelected ? (

                <div className="selected-array" style={{ left: x, top: y }}>
                    <h3>{text}</h3>

                    <div className="array-container" >
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
                                onClick={handleArrayNodeClick}
                            />
                        ))}
                        <ArrayNode
                            key='end'
                            display_index='end'
                            display_text='+'
                            onClick={addToEndOfArray}
                        />
                    </div>
                </div>
            ) : (
                <div className="array" style={{ left: x, top: y }}>
                    <h3>{text}</h3>

                    <div className="array-container" >
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
                                onClick={handleArrayNodeClick}
                            />
                        ))}
                        <ArrayNode
                            key='end'
                            display_index='end'
                            display_text='+'
                            onClick={addToEndOfArray}
                        />
                    </div>
                </div>
            )}
        </>
    );
};
Array.propTypes = {
    name: PropTypes.number.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool
}
export default Array;
