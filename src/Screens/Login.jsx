import React from "react";
import {
  Person,
  Lock,
  Visibility,
  VisibilityOff,
  AccountCircle,
  Security,
} from "@mui/icons-material";

const Login = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-[50%]">
        <div className="bg-green-700 p-2 rounded-full w-fit">
          <Person sx={{ color: "white" }} />
        </div>
        <h1 className="font-bold text-6xl text-center text-[#30854E]">
          Build Your Future
        </h1>
      </div>

      {/* Build Your Future Section */}
      <div className="w-[50%] bg-[#30854E] flex flex-col h-screen items-center justify-center ">
        <h1 className="font-bold text-6xl text-center text-white">
          Build Your Future
        </h1>
        <p className="text-white font-semibold text-2xl text-center mt-10 w-[90%]">
          Create professional resumes that get you hired with our modern
          templates and AI-powered suggestions
        </p>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">50K+</h3>
            <p className="text-white mt-4">Resume Created</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">95%</h3>
            <p className="text-white mt-4">Success Rate</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-6xl text-center text-white">24/7</h3>
            <p className="text-white mt-4">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
