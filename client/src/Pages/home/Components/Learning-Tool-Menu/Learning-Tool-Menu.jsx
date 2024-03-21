import React, { useState } from "react";
import Card from "react-bootstrap/card";
import LearningToolViewWindow from "./Learning-Tool-View-Window/Learning-Tool-View-Window";
import ViewSelectionMenu from "./View-Selection-Menu/View-Selection-Menu";

const LearningToolMenu = ({HomeWidth, HomeHeight}) => {
    const [selectedView, setSelectedView] = useState("Code View");

    return (
        <Card className='learning-tool-menu' style={{
            width: HomeWidth,
            height: HomeHeight
            }}>
            <div className="card-header">
                <ViewSelectionMenu setSelectedView={setSelectedView} />
            </div>
            <div className="card-body">
                <LearningToolViewWindow selectedView={selectedView} />
            </div>
        </Card>
    );
};

export default LearningToolMenu;
