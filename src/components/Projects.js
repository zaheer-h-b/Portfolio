import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DOC-AI",
    description:
      "An AI-powered document intelligence system that allows users to upload documents and query them through natural-language conversations using RAG, Qdrant, and Google Gemini API.",
    codeLink: "https://github.com/zaheer-h-b/Doc-AI",
  },
  {
    title: "Employee Attendance System",
    description:
      "A full-stack MERN application with role-based Admin and Employee portals for attendance tracking, leave applications, approval workflows, email OTP verification, and secure authentication.",
    codeLink: "https://github.com/zaheer-h-b/attendance-system",
  },
];

const Projects = () => {
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
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-12 underline underline-offset-8">
          Projects
        </h2>

        <div className="max-w-4xl mx-auto space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-blue-500/40 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition duration-300"
              >
                View Code
              </a>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Projects;