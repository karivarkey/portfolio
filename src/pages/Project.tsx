import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaHammer } from "react-icons/fa";

const Projects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-900 p-6 relative overflow-hidden">
      {/* Heading */}
      <h1
        className={`text-4xl font-bold mt-8 mb-4 opacity-0 transition-all duration-1000 delay-200 ${
          animate ? "opacity-100" : ""
        }`}
      >
        🚧 Projects Page Coming Soon!
      </h1>
      <p
        className={`text-gray-600 text-lg text-center max-w-xl mb-6 opacity-0 transition-all duration-1000 delay-400 ${
          animate ? "opacity-100" : ""
        }`}
      >
        I'm still working on setting up this page. In the meantime, you can
        check out my projects on GitHub! 🔥
      </p>

      {/* GitHub Link */}
      <a
        href="https://github.com/karivarkey" // Change to your actual GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-700 opacity-0 translate-y-4 transition-all duration-1000 delay-600"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(10px)",
        }}
      >
        <FaGithub className="text-2xl" />
        Visit My GitHub <FaExternalLinkAlt />
      </a>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none ">
        <div className="absolute w-[200px] h-[200px] bg-yellow-300 opacity-20 rounded-full blur-3xl top-20 left-10 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full blur-3xl bottom-20 right-10 animate-pulse" />
      </div>

      {/* Icons for fun */}
      <div
        className={`mt-6 flex gap-6 opacity-0 transition-all duration-1000 delay-800 ${
          animate ? "opacity-100" : ""
        }`}
      >
        <FaHammer className="text-4xl text-yellow-500 animate-bounce" />
        <FaGithub className="text-4xl text-black animate-pulse" />
      </div>
    </div>
  );
};

export default Projects;
