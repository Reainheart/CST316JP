import React from "react";
import "./Node.css";

const Node = ({ x, y, text, onClick }) => {
    return (
        <div className="node" style={{ left: x, top: y }} onClick={onClick}>
            <p>{text}</p>
        </div>
    );
};

export default Node;
