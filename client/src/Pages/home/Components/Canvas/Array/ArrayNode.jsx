// import React from 'react';
import PropTypes from 'prop-types';
import './Array.css'
const ArrayNode = ({ text, onClick }) => {

    return (
        <>
            <div
                style={{
                    width: '50px',
                    height: '50px'
                }}
                className='arrayNode'
                onClick={onClick}>
                {text}
            </div>
        </>
    )
}
ArrayNode.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};
export default ArrayNode;
