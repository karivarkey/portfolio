import profilePic from "./../assets/svg/About/me_wave.svg";
import data from "./../../data.json";

const About = () => {
  const { aboutPage } = data;

  return (
    <main className="min-h-screen bg-white text-neutral-900 px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[260px_1fr] gap-16 items-start">
        {/* Profile Image */}
        <div className="relative w-44 h-44 md:w-56 md:h-56 flex items-center justify-center">
          {/* Pattern Background */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E8541A' fill-opacity='0.04'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Avatar */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden bg-white">
            <img
              src={profilePic}
              alt={aboutPage.profileAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            {aboutPage.heading}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
            {aboutPage.tagline}
          </p>

          {/* Intro Paragraph */}
          <p className="mt-8 text-base md:text-lg text-neutral-700 leading-relaxed max-w-3xl">
            {aboutPage.description}
          </p>

          {/* Roles */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm uppercase tracking-widest text-neutral-500">
            {aboutPage.roles.map((role, index) => (
              <span key={index} className="border-b border-neutral-300 pb-1">
                {role}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-6 text-sm text-neutral-600">
            {aboutPage.bioInfo.map((item, index) => (
              <div key={index}>
                <p className="text-neutral-400 uppercase tracking-wider text-xs">
                  {item.label}
                </p>
                <p className="mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
