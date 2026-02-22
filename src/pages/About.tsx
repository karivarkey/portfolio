import profilePic from "./../assets/svg/About/me_wave.svg";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Profile Card */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row p-6 md:p-10 transition-all duration-500 hover:shadow-2xl">
        {/* Left - Profile Picture */}
        <div className="relative flex-shrink-0 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            rel="prefetch"
            src={profilePic}
            alt="Geevarghese Regi"
            className="w-full h-full object-cover relative top-3"
          />
        </div>

        {/* Right - Info Section */}
        <div className="flex-1 flex flex-col justify-center px-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Geevarghese Regi 🚀
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            Hey there! I'm <b>Geevarghese</b> (aka <b>Gee</b> or{" "}
            <b>karivarkey</b>) 👋, a full-stack developer with a passion for
            <b> building innovative apps</b> and <b>AI-driven projects</b>. I
            love experimenting with <b>React, TypeScript, MongoDB</b>, and{" "}
            <b>AI/ML models</b> 🤖. Always on a journey to{" "}
            <b>learn, build, and break things to understand them better!</b> 🔥
          </p>

          <p className="text-md text-gray-500 mt-3">
            Currently working as a{" "}
            <b>Freelance Technical Developer @ AIDE DHS</b>
          </p>

          {/* Titles / Roles */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Roles & Skills 🎯
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Full-Stack Developer 🖥️",
                "React Native & Expo Expert 📱",
                "AI/ML Enthusiast 🤖",
                "Firebase & Firestore Wizard 🔥",
                "Linux & Arch User 🐧",
                "Cloud & Backend Dev ☁️",
              ].map((role, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Bio Info */}
          <div className="mt-5 text-gray-700">
            <p>
              <b>📍 Location:</b> India 🇮🇳
            </p>
            <p>
              <b>🎓 Education:</b> 3rd-year CSE undergrad 📚
            </p>
            <p>
              <b>📜 Degree:</b> B.Tech in Computer Science & Engineering 💻
            </p>
            <p>
              <b>🎓 Graduation:</b> 2026 🎯
            </p>
            <p>
              <b>🏢 Company:</b> Freelancer 🌍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
