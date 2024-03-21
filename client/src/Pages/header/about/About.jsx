import React from "react";
import "./about.css";
import Header from "../Header";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="about-text">
                <h1>About</h1>
                <h5>Alex Shibley</h5>
                <p>QA Lead & Programmer</p>
                <h5>Cameron McHatton</h5>
                <p>Architect & Programmer</p>
                <h5>Milad Ale Ali</h5>
                <p>Product Owner & Programmer</p>
                <h5>Noah Etchemendy</h5>
                <p>Scrum Master, Architect, & Programmer</p>
            </div>
        </>
    );
};

export default AboutPage;
