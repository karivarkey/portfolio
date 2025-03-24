import Background from "./../assets/svg/Card/gradient.svg";
import Me from "./../assets/svg/Card/me.svg";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import CardData from "../components/BusinessCard/CardData";
import { useState } from "react";
import { Download } from "lucide-react";

const Card = () => {
  const [menu, setMenu] = useState<"About" | "Bio" | "Contact">("About");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#EEEEEE]">
      {/* Card Container */}
      <div className="relative flex flex-col w-5/6 rounded-t-3xl px-6 pt-6 text-black font-semibold overflow-hidden">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-[conic-gradient(white_0deg_10deg,green_80deg_120deg,white_130deg_140deg,pink_200deg_240deg,white_250deg_260deg,blue_300deg_360deg)] bg-cover bg-center"
          style={{ backgroundImage: `url(${Background})` }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Avatar Section */}
          <div className="bg-white rounded-xl p-2 w-40 h-40 flex items-center justify-center shadow-md">
            <img src={Me} alt="Me" className="w-36 h-36" />
          </div>
          <div className="text-lg font-semibold mt-2">Geevarghese Regi</div>
          <AnimatedText />

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Geevarghese_Resume.pdf"
            className="mt-4 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>

          {/* Menu Section */}
          <div className="w-3/4 mt-6">
            <div className="relative flex justify-between items-center">
              {["About", "Bio", "Contact"].map((item) => (
                <div
                  key={item}
                  className={`relative px-6 py-2 -bottom-1 cursor-pointer transition-all ${
                    menu === item
                      ? "bg-white shadow-md rounded-md text-black font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => setMenu(item as "About" | "Bio" | "Contact")}
                >
                  <span className="relative z-10">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white w-5/6 flex items-center justify-center rounded-b-3xl py-6">
        <CardData menu={menu} />
      </div>
    </div>
  );
};

export default Card;
