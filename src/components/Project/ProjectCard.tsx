import { motion } from "framer-motion";

type Props = {
  project: {
    name: string;
    description: string;
    link: string;
    image: string;
    date: {
      from: string;
      to: string;
    };
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative w-full sm:w-80 flex flex-col items-center bg-white border border-black rounded-2xl p-6 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section */}
      <motion.div
        className="relative w-32 h-32 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <img
          src={"./Projects/" + project.image}
          alt={project.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div className="flex flex-col items-center text-center mt-4">
        <h3 className="text-2xl font-bold tracking-wide transition-all duration-300 group-hover:text-gray-800">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-gray-700 transition-all duration-300 group-hover:text-black">
          {project.description}
        </p>

        {/* Date Section */}
        <div className="mt-4 flex flex-col text-xs text-gray-500 transition-all duration-300 group-hover:text-black">
          <span>From: {project.date.from}</span>
          <span>Till: {project.date.to}</span>
        </div>
      </motion.div>

      {/* Glowing Hover Effect */}
      <motion.div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 blur-2xl"></div>
      </motion.div>
    </motion.a>
  );
};

export default ProjectCard;
