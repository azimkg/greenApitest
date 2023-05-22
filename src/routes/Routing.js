import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from '../layouts/AuthPage';
import SendMessage from '../layouts/SendMessage';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/send" element={<SendMessage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;