import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
    return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
    );
}

export default App;