import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from './login'
import Registrar from './registrar'

function Auth() {


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="*" element={<Login />} />
                <Route exact path="/registrar" element={<Registrar />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Auth;