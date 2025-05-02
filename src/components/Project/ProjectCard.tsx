import { motion } from "framer-motion";

type Props = {
  project: {
    name: string;
    description: string;
    link?: string;
    image: string;
    date?: {
      from: string;
      to: string;
    };
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative w-full sm:w-80 bg-white border border-black rounded-2xl p-4 shadow-lg overflow-hidden transition-all duration-300"
    >
      {project.link ? (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* Image Section */}
          <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`./Projects/${project.image}`}
              alt={project.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>

          {/* Title */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
          </div>
        </motion.a>
      ) : (
        <div className="block cursor-default">
          {/* Image Section */}
          <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={`./Projects/${project.image}`}
              alt={project.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>

          {/* Title */}
          <div className="mt-4 text-center">
            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
          </div>
        </div>
      )}

      {/* Hover Details Overlay */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-white/95 backdrop-blur-xl p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <p className="text-sm text-gray-700">{project.description}</p>
        {project.date && (
          <div className="mt-4 text-xs text-gray-500">
            <p>From: {project.date.from}</p>
            <p>To: {project.date.to}</p>
          </div>
        )}
      </motion.div>

      {/* Subtle Glow */}
      <motion.div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-white to-gray-200 blur-2xl" />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
