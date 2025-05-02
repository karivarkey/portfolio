import { motion } from "framer-motion";

type Props = {
  company: {
    name: string;
    role: string;
    duration: {
      from: string;
      to: string;
      duration: string;
    };
    technologies: string[];
    website: string;
  };
};

const CompanyCard = ({ company }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="w-full sm:w-80 bg-white border border-black rounded-2xl p-4 shadow-lg text-center"
    >
      {/* Image Preview */}
      <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-gray-300 bg-gray-50 flex items-center justify-center">
        <img
          src={`/Companies/${company.name}.png`}
          alt={`${company.name} preview`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Company Info */}
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold text-black hover:underline"
      >
        {company.name}
      </a>
      <p className="mt-1 text-gray-700">{company.role}</p>
      <p className="text-sm text-gray-500 mt-1">
        {company.duration.from} – {company.duration.to} (
        {company.duration.duration})
      </p>

      {/* Technologies */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
        {company.technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyCard;
