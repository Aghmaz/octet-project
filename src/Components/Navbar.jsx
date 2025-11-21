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


import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { authAPI } from "../services/api";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }

    // Check screen width
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < window.innerWidth * 0.6 || window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  // Get first name from full name
  const getFirstName = (fullName) => {
    if (!fullName) return '';
    return fullName.split(' ')[0];
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Clear local storage anyway
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  const linkClasses = ({ isActive }) =>
    `font-medium rounded-xl p-2 px-5 border transition-all duration-300 ease-in-out
     ${
       isActive
         ? "border-0  font-semibold" 
         : "border-black " 
     }`;

  const mobileLinkClasses = ({ isActive }) =>
    `block font-medium rounded-xl p-3 px-5 border transition-all duration-300 ease-in-out mb-2
     ${
       isActive
         ? "border-0  font-semibold bg-gray-100" 
         : "border-black " 
     }`;

  const firstName = getFirstName(user?.fullName);

  return (
    <div>
      <header className="flex items-center justify-between px-4 md:px-12 py-4 shadow-md relative">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">Resume Builder</h1>
          <p className="text-xs md:text-sm">Create professional resumes with ease</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap items-center space-x-2">
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

          <span className="font-medium text-gray-600 p-2 px-3">
            Welcome, {firstName || 'User'}
          </span>
          <button 
            onClick={handleLogout}
            className="text-red-500 hover:underline p-2 px-3 cursor-pointer"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-3">
          <span className="font-medium text-gray-600 text-sm">
            Welcome, {firstName || 'User'}
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="text-gray-700" />
            ) : (
              <MenuIcon className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50 md:hidden">
            <div className="flex flex-col p-4">
              <NavLink 
                to="/template" 
                className={mobileLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </NavLink>
              <NavLink 
                to="/editor" 
                className={mobileLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Editor
              </NavLink>
              <NavLink 
                to="/preview" 
                className={mobileLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preview
              </NavLink>
              <NavLink 
                to="/manage" 
                className={mobileLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Manage
              </NavLink>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-red-500 hover:underline p-3 px-5 text-left font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

