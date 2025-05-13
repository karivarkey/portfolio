import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Laptop from "./../assets/svg/Connect/Laptop.svg";

const contacts = [
  { id: "github", url: "https://github.com/karivarkey", icon: FaGithub },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/geevarghese-regi-658531214/",
    icon: FaLinkedin,
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/karivarkey/",
    icon: FaInstagram,
  },
];

const Contact = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    document.body.style.overflow = "hidden";
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setTilt({
        x: ((clientX - centerX) / centerX) * 10,
        y: ((clientY - centerY) / centerY) * -10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black relative overflow-hidden">
      {/* Animated Laptop Image */}
      <img
        src={Laptop}
        alt="Laptop"
        className={`w-80 md:w-[400px] absolute top-16 opacity-0 scale-75 transition-all duration-1000 ${
          animate ? "opacity-100 scale-100" : ""
        }`}
      />

      <h1
        className={`text-4xl font-bold mt-64 mb-4 opacity-0 transition-all duration-1000 delay-200 ${
          animate ? "opacity-100" : ""
        }`}
      >
        Let's Connect
      </h1>
      <p
        className={`text-gray-600 text-lg mb-8 opacity-0 transition-all duration-1000 delay-400 ${
          animate ? "opacity-100" : ""
        }`}
      >
        Find me on these platforms:
      </p>

      {/* Social Icons */}
      <div
        className={`flex gap-8 opacity-0 transition-all duration-1000 delay-600 ${
          animate ? "opacity-100" : ""
        }`}
      >
        {contacts.map(({ id, url, icon: Icon }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-4 rounded-full shadow-lg bg-black text-white transition-transform duration-300 ease-out transform hover:scale-110"
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
          >
            <Icon className="text-4xl" />
          </a>
        ))}
      </div>

      {/* Subtle Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200px] h-[200px] bg-gray-900 opacity-10 rounded-full blur-3xl top-20 left-10 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-gray-900 opacity-10 rounded-full blur-3xl bottom-20 right-10 animate-pulse" />
      </div>
    </div>
  );
};

export default Contact;
