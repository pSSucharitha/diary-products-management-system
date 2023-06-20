import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import About from './about';
import Contact from "./contact";
import Login from './form';
var Path=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
)
}
export default Path;
