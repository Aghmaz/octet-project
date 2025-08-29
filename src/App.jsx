import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Screens/Login";

import Signup from "./Screens/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Forgot from "./Screens/Forgot";


function App() {


  return (
    <>

     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </BrowserRouter>

     

    </>
  );
}

export default App;
