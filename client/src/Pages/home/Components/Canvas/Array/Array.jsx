// import React from "react";
import ArrayNode from "./ArrayNode";
import PropTypes from 'prop-types'
import "./Array.css";
import { useState } from "react";

const Array = ({ x, y, text, onClick, isSelected }) => {

    const [arrayData, setArrayData] = useState([{ x: { x }, y: { y }, text: 'arrayNode' }])
    return (
        <>
            {isSelected ? (
                <div className="selected-array" style={{ left: x, top: y }}>
                    <h3>{text}</h3>
                    <div className="selected-array-container" onClick={onClick} >

                        {arrayData.map((node, index) => (
                            <ArrayNode
                                key={index}
                                x={node.x}
                                y={node.y}
                                text={node.text}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="array" style={{ left: x, top: y }}>
                    <h3>{text}</h3>
                    <div className="array-container" onClick={onClick} >

                        {arrayData.map((node, index) => (
                            <ArrayNode
                                key={index}
                                x={node.x}
                                y={node.y}
                                text={node.text}
                            />
                        ))}
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
    isSelected: PropTypes.bool,
    arrayData: PropTypes.array.isRequired
}
export default Array;
