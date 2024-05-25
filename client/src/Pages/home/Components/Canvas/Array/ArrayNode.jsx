// import React from 'react';
import PropTypes from 'prop-types';
import './Array.css'
const ArrayNode = ({ display_index, display_text, onClick }) => {

    return (
        <>
            <div className='arrayNode' onClick={onClick}>
                <div className='arrayNodeIndex'>
                    {display_index}
                </div>
                <div className='arrayNodeDisplay'>
                    {display_text}
                </div>
            </div>
        </>
    )
}
ArrayNode.propTypes = {
    display_index: PropTypes.any,
    display_text: PropTypes.any,  
    onClick: PropTypes.func
};
export default ArrayNode;
