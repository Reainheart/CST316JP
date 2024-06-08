import React from "react";
import "./about.css";
import Header from "../Header";

const AboutPage = () => {
    return (
        <div className="about-div">
            <Header />
            <div className="about-text">
                <h1>About</h1>
                <div>
                    <h5>Alex Shibley</h5>
                    <p>QA Lead, Programmer</p>
                </div>
                <div>
                    <h5>Cameron McHatton</h5>
                    <p>Architect, Programmer</p>
                </div>
                <div>
                    <h5>Milad Ale Ali</h5>
                    <p>Product Owner, Programmer</p>
                </div>
                <div>
                    <h5>Noah Etchemendy</h5>
                    <p>Scrum Master, Architect, Programmer</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
