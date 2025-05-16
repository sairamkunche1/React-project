import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import {Link} from "react-router-dom";
import UserContext from "../utils/UserContext";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const data = useContext(UserContext);

  return (
    <header className="sticky top-0 z-50 bg-white ">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo with enhanced styling */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-tight">
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                        EatEasy
                        </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-300"></span>
                </span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/" 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Cart
                {/* Optional cart badge */}
                <span className="ml-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                  0
                </span>
              </Link>
            </li>
            <li>
              <button 
                onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-sm"
              >
                {btnName}
              </button>
            </li>
            {data.loggedInUser && (
              <li className="flex items-center">
                <span className="ml-2 text-gray-700 font-medium">
                  <span className="text-blue-600">Hi, </span>
                  {data.loggedInUser}
                </span>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile menu button (optional) */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};


  export default Header;