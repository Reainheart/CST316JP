import { useState } from "react";
import PropTypes from 'prop-types';
import LearningToolViewWindow from "./Learning-Tool-View-Window/Learning-Tool-View-Window";
import "./Learning-Tool-Menu.css";

//For future implimentation 
import ViewSelectionMenu from "./View-Selection-Menu/View-Selection-Menu";

const LearningToolMenu = ({ HomeWidth, HomeHeight, CanvasObjects }) => {
    const [selectedView, setSelectedView] = useState("Code View");

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 'inherit',
                width: HomeWidth,
                height: HomeHeight
            }}>
            <ViewSelectionMenu setSelectedView={setSelectedView} />
            <LearningToolViewWindow selectedView={selectedView} CanvasObjects={CanvasObjects} />
        </div>
    );
};
LearningToolMenu.propTypes = {
    CanvasObjects: PropTypes.any,
    HomeWidth: PropTypes.number,
    HomeHeight: PropTypes.number
};

export default LearningToolMenu;
