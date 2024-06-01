import PropTypes from 'prop-types';
import './Queue.css';

const QueueNode = ({ display_index, display_text, onClick }) => {
    return (
        <>
            <div className="queueNode" onClick={onClick}>
                <div className="queueNodeIndex">
                    {display_index}
                </div>
                <div className="queueNodeDisplay">
                    {display_text}
                </div>
            </div>
        </>
    );
};

QueueNode.propTypes = {
    display_index: PropTypes.any,
    display_text: PropTypes.any,
    onClick: PropTypes.func
};

export default QueueNode;
