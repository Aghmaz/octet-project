
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Template from "./Screens/Template"
import Forgot from "./Screens/Forgot";
import Editor from "./Screens/Editor";
import Preview from "./Screens/Preview";
import Manage from "./Screens/Manage";
function App() {


  return (
    <>

     
    
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
         <Route path="/template" element={<Template />} />
          <Route path="/editor" element={<Editor />} />
         
           <Route path="/preview" element={<Preview/>} />
            <Route path="/manage" element={<Manage />} />
      </Routes>
   


    </>
  );
}

export default App;
