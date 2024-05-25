import CodeView from "../Code-View/Code-View";
import PropTypes from 'prop-types';
import "./Learning-Tool-View-Window.css";

const LearningToolViewWindow = ({ selectedView, CanvasObjects }) => {
    const renderViewContent = () => {
        switch (selectedView) {
            case "Code View":
                return <CodeView className="code-view" CanvasObjects={CanvasObjects} />;
            case "Memory View":
                return <p>Memory View content goes here</p>;
            case "Function View":
                return <p>Function View content goes here</p>;
            default:
                return <p>Select a view</p>;
        }
    };

    return (
        <div>
            <h5 style={{ color: "pink" }}>{selectedView}</h5>
            {renderViewContent()}
        </div>
    );
};
LearningToolViewWindow.propTypes = {
    selectedView: PropTypes.string,
    CanvasObjects: PropTypes.any
};
export default LearningToolViewWindow;
