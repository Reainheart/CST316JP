import PropTypes from 'prop-types';
import './Stack.css';

const StackNode = ({ display_index, display_text, onClick }) => {
    return (
        <>
            <div className="stackNode" onClick={onClick}>
                <div className="stackNodeIndex">
                    {display_index}
                </div>
                <div className="stackNodeDisplay">
                    {display_text}
                </div>
            </div>
        </>
    );
};

StackNode.propTypes = {
    display_index: PropTypes.any,
    display_text: PropTypes.any,
    onClick: PropTypes.func
};

export default StackNode;
