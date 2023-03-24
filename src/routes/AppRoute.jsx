import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Contact from "../pages/Contact";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
export default AppRoutes