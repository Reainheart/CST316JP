import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
//import About from "./components/about/About.jsx";
import CanvasComponent from "./components/CanvasComponent/CanvasComponent.jsx";

function App() {
    return (
        <>
            <Header />
            <Home />
            <CanvasComponent />
        </>
    );
}

export default App;
