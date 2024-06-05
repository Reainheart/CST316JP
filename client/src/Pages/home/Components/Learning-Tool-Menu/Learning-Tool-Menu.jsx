import { useState } from "react";
import PropTypes from 'prop-types';
import LearningToolViewWindow from "./Learning-Tool-View-Window/Learning-Tool-View-Window";
import "./Learning-Tool-Menu.css";
import Card from "react-bootstrap/card";
import ViewSelectionMenu from "./View-Selection-Menu/View-Selection-Menu";

const LearningToolMenu = ({ HomeWidth, HomeHeight, CanvasObjects }) => {
    const [selectedView, setSelectedView] = useState("Code View");

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: HomeWidth,
                width: '100%',
                height: HomeHeight
            }}>
            <Card>
                <div className="card-header">
                    <ViewSelectionMenu setSelectedView={setSelectedView} />
                </div>
                <div className="card-body" >
                    <LearningToolViewWindow selectedView={selectedView} CanvasObjects={CanvasObjects} />
                </div>
            </Card >
        </div>
    );
};
LearningToolMenu.propTypes = {
    CanvasObjects: PropTypes.any,
    HomeWidth: PropTypes.number,
    HomeHeight: PropTypes.number
};

export default LearningToolMenu;

// TO IMPLIMENT LATER
{/* <div className={open ? 'collapse.show' : 'collapse'}>

</div> */}