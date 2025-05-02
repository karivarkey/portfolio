import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import CompanyCard from "../components/Project/CompanyCard";
import { projects, companies } from "./../../data.json";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-start min-h-screen bg-white text-black px-4 md:px-12 lg:px-24 py-10 space-y-16"
    >
      {/* Work Experience Section */}
      <section className="w-full max-w-6xl">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="font-bold text-3xl sm:text-4xl text-center mb-8"
        >
          My Work Experience
        </motion.h2>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-6xl">
        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="font-bold text-3xl sm:text-4xl text-center mb-8"
        >
          I have worked on numerous projects! Here are some noteworthy ones
        </motion.h1>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border border-black p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-200 shadow-2xl"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </section>

      {/* GitHub CTA */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="pt-6"
      >
        <motion.a
          href="https://github.com/karivarkey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-lg font-semibold bg-black text-white rounded-full shadow-lg transition-all duration-500 hover:bg-gray-900 hover:scale-105"
        >
          Visit My GitHub
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
