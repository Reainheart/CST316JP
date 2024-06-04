import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PropTypes from 'prop-types';
import "./View-Selection-Menu.css";

const ViewSelectionMenu = ({ setSelectedView }) => {
    const handleViewClick = (view) => {
        setSelectedView(view);
    };

    return (
        <div className="view-selection-menu">
            <ButtonGroup
                className="btn-group"
                role="group"
                aria-label="View Selector"
            >
                <Button
                    className="btn btn-primary"
                    variant="secondary"
                    onClick={() => handleViewClick("Code View")}
                >
                    Code View
                </Button>
                {/* <Button
                    className="btn btn-primary"
                    variant="secondary"
                    onClick={() => handleViewClick("Memory View")}
                >
                    Memory View
                </Button>
                <Button
                    className="btn btn-primary"
                    variant="secondary"
                    onClick={() => handleViewClick("Function View")}
                >
                    Function View
                </Button> */}
            </ButtonGroup>
        </div>
    );
};
ViewSelectionMenu.propTypes = {
    setSelectedView: PropTypes.func
};

export default ViewSelectionMenu;
