import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
    return (
        <div className="container">
            <Header />
            <Home />
        </div>
    );
}

export default App; 
