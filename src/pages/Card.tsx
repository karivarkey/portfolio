import Me from "./../assets/svg/Card/me.svg";
import CardData from "../components/BusinessCard/CardData";
import { useState } from "react";
import data from "./../../data.json";

const Card = () => {
  const [menu, setMenu] = useState<"About" | "Bio" | "Contact">("About");

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col items-center justify-center px-6">
      {/* Card Wrapper */}
      <div className="w-full max-w-md border border-neutral-200 rounded-2xl">
        {/* Top Section */}
        <div className="p-8 text-center">
          {/* Avatar */}
          <div className="w-28 h-28 mx-auto rounded-xl bg-neutral-100 flex items-center justify-center">
            <img src={Me} alt="Profile" className="w-24 h-24 object-contain" />
          </div>

          {/* Name */}
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">
            {data.name}
          </h1>

          {/* Role */}
          <p className="mt-2 text-neutral-500 text-sm uppercase tracking-widest">
            Full Stack Engineer
          </p>

          {/* Resume Link */}
          <a
            href={data.resume.url}
            download={data.resume.filename}
            className="mt-6 inline-block text-sm underline underline-offset-4 hover:opacity-70 transition"
          >
            {data.resume.label}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200" />

        {/* Tabs */}
        <div className="flex justify-around text-sm uppercase tracking-widest py-4">
          {["About", "Bio", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setMenu(item as "About" | "Bio" | "Contact")}
              className={`transition ${
                menu === item ? "text-black" : "text-neutral-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border-t border-neutral-200 p-6 text-sm text-neutral-600 leading-relaxed">
          <CardData menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default Card;
