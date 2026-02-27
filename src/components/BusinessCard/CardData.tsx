import data from "./../../../data.json";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

type Props = {
  menu: "About" | "Bio" | "Contact";
};

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const { card } = data;

const ContactSection = () => {
  const contactLinks = [
    {
      icon: FaEnvelope,
      text: card.contact.email,
      link: `mailto:${card.contact.email}`,
    },
    {
      icon: FaGithub,
      text: "GitHub",
      link: card.contact.githubUrl,
    },
    {
      icon: FaLinkedin,
      text: "LinkedIn",
      link: card.contact.linkedInUrl,
    },
    {
      icon: FaInstagram,
      text: "Instagram",
      link: card.contact.instagramUrl,
    },
  ];

  return (
    <div className="space-y-6">
      {contactLinks.map((contact, index) => (
        <a
          key={index}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between text-sm"
        >
          <div className="flex items-center gap-4">
            <contact.icon className="text-neutral-400 group-hover:text-black transition" />
            <span className="group-hover:underline underline-offset-4">
              {contact.text}
            </span>
          </div>
          <span className="text-neutral-400 group-hover:text-black transition">
            →
          </span>
        </a>
      ))}
    </div>
  );
};

const CardData = ({ menu }: Props) => {
  return (
    <div className="w-full text-neutral-700">
      <AnimatePresence mode="wait">
        <motion.div
          key={menu}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {menu === "About" && (
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="font-medium text-neutral-900">{card.about.text}</p>
              <p>{card.about.subText}</p>
            </div>
          )}

          {menu === "Bio" && (
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-neutral-400 uppercase tracking-widest text-xs">
                  Company
                </p>
                <p className="mt-1">{card.bio.company}</p>
                <p className="text-neutral-500">{card.bio.location}</p>
              </div>

              <div>
                <p className="text-neutral-400 uppercase tracking-widest text-xs">
                  Education
                </p>
                <p className="mt-1">{card.bio.degree}</p>
                <p className="text-neutral-500">{card.bio.education}</p>
              </div>
            </div>
          )}

          {menu === "Contact" && <ContactSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardData;
