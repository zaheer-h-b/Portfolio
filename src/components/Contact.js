import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"; // ✅ Import Navbar

const Contact = () => {
  const [copiedField, setCopiedField] = useState("");

  const phoneNumber = "+91 8971864280";
  const emailAddress = "zaheerhbannigol8861@gmail.com";

  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value);
    setCopiedField(type);
    setTimeout(() => setCopiedField(""), 2000);
  };

  return (
    <>
      <Navbar /> {/* ✅ Add Navbar at the top */}

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white px-6 py-24 flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8 text-center">
          📞 Contact Me
        </h1>

        <div
          onClick={() => handleCopy(phoneNumber, "phone")}
          className="group flex items-center gap-3 mb-6 text-lg cursor-pointer relative transition-transform duration-300 hover:scale-105"
        >
          <span>{phoneNumber}</span>
          <span className="text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 absolute top-1/2 -translate-y-1/2 left-full ml-4">
            {copiedField === "phone" ? "Copied!" : "Click to copy"}
          </span>
        </div>

        <div
          onClick={() => handleCopy(emailAddress, "email")}
          className="group flex items-center gap-3 mb-6 text-lg cursor-pointer relative transition-transform duration-300 hover:scale-105"
        >
          <span>{emailAddress}</span>
          <span className="text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 absolute top-1/2 -translate-y-1/2 left-full ml-4">
            {copiedField === "email" ? "Copied!" : "Click to copy"}
          </span>
        </div>

        <div className="text-lg text-gray-300 text-center transform transition-transform duration-300 hover:scale-105">
          Bengaluru, India
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
