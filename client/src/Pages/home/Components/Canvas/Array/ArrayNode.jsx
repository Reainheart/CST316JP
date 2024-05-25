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
    display_index: PropTypes.number,
    display_text: PropTypes.string,  
    onClick: PropTypes.func
};
export default ArrayNode;
