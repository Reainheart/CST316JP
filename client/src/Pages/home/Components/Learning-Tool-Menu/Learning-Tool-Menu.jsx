import React, { useState } from "react";
import PropTypes from 'prop-types';
import Card from "react-bootstrap/card";
import LearningToolViewWindow from "./Learning-Tool-View-Window/Learning-Tool-View-Window";
import ViewSelectionMenu from "./View-Selection-Menu/View-Selection-Menu";
import "./Learning-Tool-Menu.css";

const LearningToolMenu = ({ HomeWidth, HomeHeight }) => {
    const [selectedView, setSelectedView] = useState("Code View");

    return (
        <div style={{
            borderColor: "red",
            width: HomeWidth,
            height: HomeHeight
        }}>
            <LearningToolViewWindow selectedView={selectedView} />
        </div>
    );
};
LearningToolMenu.propTypes = {
    HomeWidth: PropTypes.string,
    HomeHeight: PropTypes.func
};

// To Impliment
{/* <Card
style={{

    borderRadius: "0px",
    backgroundColor: "#0b0c10",
}}
>
<div className="card-header">
<ViewSelectionMenu setSelectedView={setSelectedView} />
</div>
<div className="card-body">

</div>
</Card> */}


export default LearningToolMenu;
