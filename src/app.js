import React from "react";
import Navbar from "./components/Header";
import Jumbotron from "./components/Jumbo";
import Card from "./components/Card";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Jumbotron />
            <Card />;
        </div>
    );
}

export default App; 
