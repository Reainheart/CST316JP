import { useState, useEffect } from "react";
import "./Code-View.css";
import CodeCard from "./Code-Card";
import PropTypes from 'prop-types';

const CodeView = ({ CanvasObjects }) => {
    const [structures, setStructures] = useState([]);

    useEffect(() => {
        setStructures(CanvasObjects);
    }, [CanvasObjects])

    return (
        <div className="CodeView">
            {structures.map((structure, index) => (
                <CodeCard
                    key={index}
                    structureName={structure}
                />
            ))}
        </div>
    );
};
CodeView.propTypes = {
    CanvasObjects: PropTypes.any
};

export default CodeView;
