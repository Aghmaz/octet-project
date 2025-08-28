import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Screens/Login";
import Forgot from "./Screens/Forgot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/home" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </>
  );
}

export default App;
