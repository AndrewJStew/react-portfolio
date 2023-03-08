import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
    return (
        <Router>
            <div>
                <Header />
                {/* wrap route elements in a Routes component*/}
                <Routes>
                    {/* Home component defined in default route*/}
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact Me" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 
