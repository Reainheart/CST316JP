import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Global/header/Header";
import Footer from "./Global/footer/Footer";
import Home from "./Pages";


function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <div className="PageContent" >
                
                <Home />
                
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
