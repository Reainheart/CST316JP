//for future use
import { useState } from 'react';
import './pointer.css'
import PropTypes from 'prop-types';

const Pointer = ({ from_x ,from_y, to_x, to_y, connectedFromObject, connectedToObject}) => {
    const [isNullPointer, setIsNullPointer] = useState(false)
   
    // Calculate the angle of the arrow
    const angle = Math.atan2(to_y - from_y, to_x - from_x) * 180 / Math.PI;

    // Calculate distance between points
    const distance = Math.sqrt((to_x - from_x) ** 2 + (to_y - from_y) ** 2);

    return (
        <div>
            <svg style={{ overflow: 'visible', position: 'absolute', left: from_x, top: from_y }}>
                <line x1={0} y1={0} x2={distance} y2={0}
                    stroke="white" strokeWidth="2"
                    transform={`rotate(${angle})`} />
                <polygon points={`${distance},0 ${distance - 10},-5 ${distance - 10},5`}
                    fill="white"
                    transform={`rotate(${angle})`} />
            </svg>
        </div>
    );
}
Pointer.propTypes = {
    from_x: PropTypes.number.isRequired,
    from_y: PropTypes.number.isRequired,
    to_x: PropTypes.number.isRequired,
    to_y: PropTypes.number.isRequired,
    connectedFromObject: PropTypes.any,
    connectedToObject: PropTypes.any
};
export default Pointer;
