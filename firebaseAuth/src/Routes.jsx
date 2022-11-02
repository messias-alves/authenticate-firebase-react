import React from "react";
import { Route, Routes } from 'react-router-dom';
import Config from "./pages/config";
import Home from './pages/home'
export default () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/config" element={<Config />}/>
        </Routes>
    );
}