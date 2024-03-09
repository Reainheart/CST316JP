import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Global/header/Header";
import Footer from "./Global/footer/Footer";
import Home from "./Pages";
import InstructionalPage from "./Pages/Instruct-Page/Instruct-Page";

function App() {
    return (
        <Router>
            <div className="PageContent">
                <header>
                    <Header />
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route
                        path="/instructional-page"
                        element={<InstructionalPage />}
                    />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App;
