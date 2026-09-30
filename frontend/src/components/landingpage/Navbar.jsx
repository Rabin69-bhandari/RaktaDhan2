import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-[#E2E8F0] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-bold text-lg">
            🩸
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#0F172A]">
              BloodConnect
            </h1>
            <p className="text-xs text-[#64748B] -mt-1">
              Blood Management System
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-[#0F172A] font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#0F766E] transition-colors duration-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-[#0F766E] transition-colors duration-200"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/donors"
              className="hover:text-[#0F766E] transition-colors duration-200"
            >
              Find Donors
            </Link>
          </li>

          <li>
            <Link
              to="/requests"
              className="hover:text-[#0F766E] transition-colors duration-200"
            >
              Blood Requests
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-[#0F766E] transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden md:block px-4 py-2 border border-[#0F766E] text-[#0F766E] rounded-lg hover:bg-[#0F766E] hover:text-white transition-all duration-200"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 rounded-lg bg-[#0F766E] text-white hover:bg-teal-700 transition-all duration-200 shadow-md"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;