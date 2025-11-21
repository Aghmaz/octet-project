// src/pages/Template.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import TemplateCards from "../Components/Template_parent";

const Template = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center py-8">
        <h1 className="text-3xl font-bold">Choose Your Template</h1>
        <p className="text-gray-700 max-w-2xl py-4">
          Select from our collection of professional resume templates. Each
          design is built to help you stand out and make a strong impression.
        </p>
      </div>
      <div className="flex justify-center">
        <TemplateCards />
      </div>
    </div>
  );
};

export default Template;
