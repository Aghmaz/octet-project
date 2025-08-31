
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Screens/Login";

import Signup from "./Screens/Signup";


import Forgot from "./Screens/Forgot";


function App() {


  return (
    <>

     
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    {/* </BrowserRouter> */}


    </>
  );
}

export default App;
