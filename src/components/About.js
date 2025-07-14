import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen bg-gray-950 text-white px-6 pt-24 pb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 text-center mb-12 underline underline-offset-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed font-semibold">
          <p className="mb-6">
            I'm <span className="text-blue-300 font-bold">Zaheer Bannigol</span>, a passionate
            <span className="text-blue-400 font-bold"> Full-Stack Web Developer</span> and
            <span className="text-purple-400 font-bold"> Data Analyst</span>.
          </p>
          <p className="mb-6">
            I specialize in building responsive, scalable web applications using the
            <span className="text-green-400 font-bold"> MERN stack</span>.
            I also enjoy analyzing data to extract insights and support decision-making.
          </p>
          <p>
            My goal is to deliver modern, efficient, and elegant digital experiences.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
