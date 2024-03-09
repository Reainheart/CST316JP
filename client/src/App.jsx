import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages";
import InstructionalPage from "./Pages/Instruct-Page/Instruct-Page";

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
