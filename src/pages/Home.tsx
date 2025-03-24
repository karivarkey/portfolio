import { useEffect, useState } from "react";
import bg from "./../assets/images/Home/bg.svg";
import data from "./../../data.json";

const Home = () => {
  const [animateImage, setAnimateImage] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setAnimateImage(true), 300); // Delayed for smooth fade-in
  }, []);

  // Handle Mouse Movement for 3D Parallax Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate tilt based on cursor position
    const xTilt = ((clientX - centerX) / centerX) * 20; // Adjust sensitivity
    const yTilt = ((clientY - centerY) / centerY) * -20; // Negative for correct tilt

    setTilt({ x: xTilt, y: yTilt });
  };

  return (
    <div
      className="flex flex-1 justify-around items-center px-20 relative"
      style={{ height: "calc(100vh - 80px)" }}
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      {/* Left Section */}
      <div className="flex-1 p-4 font-bold text-2xl">
        <div className="text-start w-1/2">
          <p className="font-semibold text-gray-900 text-2xl">
            {data.card.about.text.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="text-lg text-gray-600 pt-3">
            {data.card.about.subText.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          {/* Animated Button */}
          <button
            className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-lg
              backdrop-blur-lg transition-all duration-500 ease-in-out transform
              hover:scale-105 hover:bg-gray-800 active:scale-95"
            style={{
              animation: "fadeInUp 0.8s ease-out",
            }}
            onClick={() => window.open("/about", "_self")} // Redirect to About Page
          >
            Learn More About Me
          </button>
        </div>
      </div>

      {/* Right Section - Image with Fade, Scale & 3D Parallax */}
      <div className="flex justify-end flex-1">
        <img
          src={bg}
          alt="bg"
          className="max-w-full h-auto transition-transform duration-1000 ease-out"
          style={{
            opacity: animateImage ? 1 : 0,
            transform: `perspective(1000px) scale(${animateImage ? 1 : 0.75}) 
                        rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: animateImage
              ? "opacity 1s ease-out, transform 1s ease-out"
              : "none",
          }}
        />
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
