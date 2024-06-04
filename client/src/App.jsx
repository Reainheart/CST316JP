import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages";
import InstructionalPage from "./Pages/Instruct-Page/Instruct-Page";
import AboutPage from "./Pages/header/about/About";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                    path="/instructional-page"
                    element={<InstructionalPage />}
                />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
