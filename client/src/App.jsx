import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Global/header/Header";
import Footer from "./Global/footer/Footer";
import Home from "./Pages";
import InstructionalPage from "./Pages/Instruct-Page/Instruct-Page";

function App() {
    let component;

    switch (window.location.pathname) {
        case "/":
            component = <Home />;
            break;
        case "/home":
            component = <Home />;
            break;
        case "/about":
            component = <h1>About</h1>;
            break;
        case "/instructional-page":
            component = <InstructionalPage />;
            break;
        default:
            component = <h1>404 Not Found</h1>;
            break;
    }

    return (
        <>
            <div className="PageContent">
                <header>
                    <Header />
                </header>
                <div>{component}</div>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
}

export default App;
