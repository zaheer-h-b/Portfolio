import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg text-white px-8 py-4 flex justify-between items-center backdrop-blur-md border-b border-gray-700">
      <h1 className="text-xl md:text-2xl font-bold tracking-widest text-blue-400">
        <TypeAnimation
          sequence={["Zaheer Bannigol", 2000, "Zaheer ✨", 2000]}
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <ul className="flex gap-6 md:gap-8 text-md md:text-lg font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
          >
            Projects
          </Link>
        </li>
        <li>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
