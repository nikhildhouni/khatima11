import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon from lucide-react (install if needed)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Tagline */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <p className="hidden sm:block text-xs">World's No 1 Series Long Fantasy Sports Platform</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Login / Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-3 text-sm">
          {/* <Link to="/" onClick={toggleMenu} className="block hover:underline">Home</Link> */}
          {/* <Link to="/login" onClick={toggleMenu} className="block hover:underline">Login</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="block hover:underline">Dashboard</Link> */}
          <Link
            to="/login"
            onClick={toggleMenu}
            className="block mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-center"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
