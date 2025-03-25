import { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import { projects } from "./../../data.json";

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
      className="flex flex-col items-center justify-center bg-white text-black p-6 relative overflow-hidden"
    >
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="font-bold text-4xl text-center"
      >
        I have worked on numerous projects! Here are some noteworthy ones
      </motion.h1>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-wrap justify-center gap-6 mt-10 border border-black p-6 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-200 shadow-2xl"
      >
        <motion.h1
          variants={fadeIn}
          className="font-bold text-start text-2xl w-full border-b border-black pb-2"
        >
          Current Projects / Gigs
        </motion.h1>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={fadeIn} className="w-full mt-10 text-center">
        <motion.h1
          variants={fadeIn}
          className="font-bold text-xl border-b border-black pb-2"
        >
          If you prefer to check my GitHub
        </motion.h1>
        <motion.a
          href="https://github.com/karivarkey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold bg-black text-white rounded-full shadow-lg transition-all duration-500 hover:bg-gray-900 hover:scale-105"
        >
          Visit My GitHub
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
