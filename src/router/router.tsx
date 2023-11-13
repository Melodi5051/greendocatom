import { Routes, Route } from "react-router-dom";
import React from 'react'
import Registration from "../components/Authorization/Registration";
import SignUp from "../components/Authorization/SignUp";
import SignIn from "../components/Authorization/SignIn";
import Main from "../components/Main/Main";
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/greendocatom" element={<Main />} />
        </Routes>

    );
}

export default Router;