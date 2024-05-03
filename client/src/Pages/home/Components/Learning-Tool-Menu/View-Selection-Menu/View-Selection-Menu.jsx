import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const ViewSelectionMenu = ({ setSelectedView }) => {
    const handleViewClick = (view) => {
        setSelectedView(view);
    };

    return (
        <ButtonGroup className="btn-group" role="group" aria-label="View Selector">
            <Button
                className="btn btn-primary"
                variant="secondary"
                onClick={() => handleViewClick("Code View")}
            >
                Code View
            </Button>
            <Button
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
            </Button>
        </ButtonGroup>
    );
};

export default ViewSelectionMenu;
