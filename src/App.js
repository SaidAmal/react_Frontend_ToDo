import './App.css';
import Register from './components/Register';
import React from 'react';
import Dashbord from './components/Dashbord';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {

    return (
        <div className="App">
            {/**   routes  */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashbord />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
