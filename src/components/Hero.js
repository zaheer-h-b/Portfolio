import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/zaheer_photo.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";

const Hero = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/zaheer-bannigol-734a90276/",
    },
    { name: "github", url: "https://github.com/zaheer-h-b" },
    { name: "instagram", url: "https://www.instagram.com/zaheer_h_b/" },
  ];

  return (
    <>
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 py-24 flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Profile Image */}
          <div className="relative rounded-full shadow-lg">
            <img
              src={profileImg}
              alt="Profile"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-500"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-lg text-blue-400 tracking-wide uppercase mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white">
              Zaheer Bannigol
            </h1>

            {/* Typing animation */}
            <p className="text-xl md:text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
              And I'm a{" "}
              <TypeAnimation
                sequence={["Web Developer", 2000, "Data Analyst", 2000]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-blue-400 ml-2"
              />
            </p>

            <p className="text-gray-400 mb-6 text-sm md:text-base">
              I love building fast, clean, and modern web apps with the MERN stack.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              {socialLinks.map((icon, i) => (
                <a
                  key={i}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white hover:text-blue-400 transition duration-300 transform hover:scale-125"
                >
                  <i className={`fab fa-${icon.name}`} />
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="flex justify-center md:justify-start mb-6">
              <a
                href="/Zaheer's Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-base border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
