// import React from 'react'
// import { Link } from "react-router";
// const Navbar = () => {
//   return (
//     <div>
//         <header className="flex items-center justify-between px-12 py-4 shadow-md ">
//       <div>
//         <h1 className="text-2xl font-bold ">Resume Builder</h1>
//         <p >Create professional resumes with ease</p>
//         </div>
//         <div className="flex flex-wrap space-x-2 px-10">
//           <Link to="/template" className="  hover:text-blue-600 font-medium border rounded-xl border-black p-2 px-5 hover:border-none">Templates</Link>
//           <Link to="/editor" className="hover:text-blue-600 font-medium border rounded-xl border-black p-2 px-5  ">Editor</Link>
//           <Link to="/preview" className="hover:text-blue-600 font-medium border rounded-xl border-black p-2 px-5 ">Preview</Link>
//           <Link to="/manage" className="hover:text-blue-600 font-medium border rounded-xl border-black p-2 px-5">Manage</Link>
//           <Link to="/" className="font-medium text-gray-600">Welcome,</Link>
//           <Link to="/" className="text-red-500 hover:underline">Logout</Link>        
//         </div>
//       </header> 
//     </div>
//   )
// }

// export default Navbar


import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const linkClasses = ({ isActive }) =>
    `font-medium rounded-xl p-2 px-5 border transition-all duration-300 ease-in-out
     ${
       isActive
         ? "border-0  font-semibold" 
         : "border-black " 
     }`;

  return (
    <div>
      <header className="flex items-center justify-between px-12 py-4 shadow-md ">
       
        <div>
          <h1 className="text-2xl font-bold">Resume Builder</h1>
          <p>Create professional resumes with ease</p>
        </div>

      
        <div className="flex flex-wrap space-x-2 ">
          <NavLink to="/template" className={linkClasses}>
            Templates
          </NavLink>
          <NavLink to="/editor" className={linkClasses}>
            Editor
          </NavLink>
          <NavLink to="/preview" className={linkClasses}>
            Preview
          </NavLink>
          <NavLink to="/manage" className={linkClasses}>
            Manage
          </NavLink>

          <span className="font-medium text-gray-600   p-2 px-3">Welcome,</span>
          <NavLink to="/" className="text-red-500   p-2 px-3">
            Logout
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

