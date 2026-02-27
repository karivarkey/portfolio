import data from "./../../data.json";
import profile from "./../assets/svg/About/me_wave.svg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const handler = {
    navigateToAbout: () => {
      navigate("/about");
    },
  };
  return (
    <section
      className="bg-white text-neutral-900 px-6 md:px-16 flex items-center justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 60px)" }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* LEFT — TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            {data.name}
          </h1>

          <p className="mt-6 text-xl text-neutral-500 max-w-xl leading-relaxed">
            Full-stack engineer building intelligent systems and clean digital
            products.
          </p>

          <p className="mt-8 text-base text-neutral-600 max-w-xl leading-relaxed">
            I design and build scalable applications across web and mobile.
            Focused on clarity, performance, and thoughtful engineering.
          </p>

          {/* Actions */}
          <button
            onClick={handler.navigateToAbout}
            className="mt-12 flex gap-10 text-sm uppercase tracking-widest hover:cursor-pointer"
          >
            <div className="underline underline-offset-8 hover:opacity-70 transition">
              {data.home.learnMoreLabel}
            </div>

            <a
              href={data.resume.url}
              download={data.resume.filename}
              className="underline underline-offset-8 hover:opacity-70 transition"
            >
              {data.resume.label}
            </a>
          </button>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 md:w-80 aspect-square bg-neutral-100 rounded-3xl flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
