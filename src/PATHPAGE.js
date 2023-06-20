import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import Contact from "./contact";
import History from "./History";
import SignUpPage from "./signup";
import LoginPage from "./day1";
import About from "./about";
import BasicTable from "./BasicTable";
import UpdateUser from "./UpdateUser";
import AddUser from "./AddUser";
var Path=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignUpPage/>}></Route>
        <Route path="/Login" element={<LoginPage/>}></Route>
        <Route path="/BasicTable" element={<BasicTable/>}></Route>
        <Route path="/UpdateUser" element={<UpdateUser/>}></Route>
        <Route path="/AddUser" element={<AddUser/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/history" element={<History/>}></Route>
    </Routes>
    </BrowserRouter>
)
}
export default Path;
