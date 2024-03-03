import React from "react";
import Home from "./pagges/Home";
import About from "./pagges/About";
import Contact from "./pagges/Contact";
import Services from "./pagges/Services";
import Account from "./pagges/Account";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/services">Our Services</Link></li>
                        <li><Link to="/account">Dashboard</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
