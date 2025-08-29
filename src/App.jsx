import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
