import { card } from "./../../../data.json";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

type Props = {
  menu: "About" | "Bio" | "Contact";
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

const ContactSection = () => {
  const contactLinks = [
    {
      icon: FaEnvelope,
      text: card.contact.email,
      link: `mailto:${card.contact.email}`,
      copy: true,
    },
    {
      icon: FaGithub,
      text: "GitHub",
      link: `https://github.com/${card.contact.github}`,
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      link: `https://www.linkedin.com/in/geevarghese-regi-658531214/`,
    },
    {
      icon: FaInstagram,
      text: "Instagram",
      link: `https://instagram.com/${card.contact.instagram}`,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeInScale}
      className="flex flex-col items-center gap-6 w-full"
    >
      <h2 className="text-xl font-semibold text-gray-900">Let's Connect! 🤝</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        {contactLinks.map((contact, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="flex items-center gap-4 bg-white border border-gray-300 shadow-sm rounded-xl p-4 cursor-pointer transition-all hover:shadow-md hover:border-gray-400"
            onClick={() =>
              contact.copy
                ? copyToClipboard(contact.text)
                : window.open(contact.link, "_blank")
            }
          >
            <contact.icon className="text-xl text-gray-700" />
            <span
              className="text-sm font-medium text-gray-700 truncate w-28"
              title={contact.text}
            >
              {contact.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CardData = ({ menu }: Props) => {
  return (
    <div className="px-6 w-full">
      <motion.div
        key={menu}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeInScale}
      >
        {menu === "About" && (
          <div className="text-start">
            <p className="text-base font-semibold text-gray-900">
              {card.about.text}
            </p>
            <p className="text-sm text-gray-600 pt-3">{card.about.subText}</p>
          </div>
        )}
        {menu === "Bio" && (
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <p className="text-base font-medium text-gray-900">
                {card.bio.company}
              </p>
              <p className="text-sm text-gray-600">{card.bio.location}</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm flex flex-col gap-2">
              <p className="text-base font-medium text-gray-900">
                {card.bio.degree}
              </p>
              <p className="text-sm text-gray-600">{card.bio.education}</p>
            </div>
          </div>
        )}
        {menu === "Contact" && <ContactSection />}
      </motion.div>
    </div>
  );
};

export default CardData;
