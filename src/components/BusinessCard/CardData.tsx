import { card } from "./../../../data.json";
import { motion } from "framer-motion";
import { JSX } from "react";
import {
  FaGraduationCap,
  FaHelmetSafety,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

type Props = {
  menu: "About" | "Bio" | "Contact";
};

// Animation variants for text
const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

const CardData = ({ menu }: Props) => {
  return (
    <div className="px-6 w-full">
      <motion.div
        key={menu} // This ensures Framer Motion knows when menu changes
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeInScale}
      >
        {menu === "About" && (
          <div className="flex flex-col items-center text-center">
            {/* About Text with Line Breaks */}
            <div className="text-sm font-semibold text-gray-800">
              {card.about.text.split("\n").map((line, index) => (
                <p
                  key={index}
                  className={index < 2 ? "inline mr-2" : "block mt-4"}
                >
                  {line}
                </p>
              ))}
            </div>
            {/* Subtext */}
            <div className="pt-4 text-sm font-medium text-gray-600">
              {card.about.subText}
            </div>
          </div>
        )}

        {menu === "Bio" && (
          <div className="flex flex-col gap-4 w-full">
            {/* Work Section */}
            <div className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col gap-3">
              <BioItem icon={<FaHelmetSafety />} text={card.bio.company} />
              <BioItem icon={<FaLocationArrow />} text={card.bio.location} />
            </div>

            {/* Education Section */}
            <div className="bg-gray-100 rounded-xl p-4 shadow-md flex flex-col gap-3">
              <BioItem icon={<FaGraduationCap />} text={card.bio.degree} />
              <BioItem icon={<FaUniversity />} text={card.bio.education} />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

// Reusable Component for Bio Items
const BioItem = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <div className="text-lg text-black">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default CardData;
