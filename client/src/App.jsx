import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./Global/header/Header";
import { Home } from "./Pages";


function App() {
    return (
        <>
            <Header />
            <div className="flex-container">
                <Home />
            </div>
        </>
    );
}

export default App;
