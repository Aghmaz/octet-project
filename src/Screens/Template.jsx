import React from "react";
import Navbar from "../Components/Navbar";
import Template_parent from "../Components/Template_parent"

const Template = () => {
  return (
    <div>  
    <Navbar/>
    <div className="flex flex-col items-center justify-center text-center py-8">
       <h1 className="text-3xl font-bold ">Choose Your Template</h1>
        <p className=" text-gray-800 max-w-2xl py-4">Select from our collection of professional resume templates. Each template is designed to help you stand out and make a great impression.</p>
    </div>
    <div className="flex flex-row justify-around">
   
    <Template_parent/>
     </div>
       </div>
  )
}
export default Template
