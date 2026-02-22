import profilePic from "./../assets/svg/About/me_wave.svg";
import data from "./../../data.json";

const About = () => {
  const { aboutPage } = data;

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
            alt={aboutPage.profileAlt}
            className="w-full h-full object-cover relative top-3"
          />
        </div>

        {/* Right - Info Section */}
        <div className="flex-1 flex flex-col justify-center px-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">
            {aboutPage.heading}
          </h1>

          <p className="text-lg text-gray-600 mt-2">
            {aboutPage.intro.map((part, index) =>
              part.bold ? (
                <b key={index}>{part.text}</b>
              ) : (
                <span key={index}>{part.text}</span>
              ),
            )}
          </p>

          <p className="text-md text-gray-500 mt-3">
            Currently working as a <b>{aboutPage.currentRole}</b>
          </p>

          {/* Titles / Roles */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Roles & Skills 🎯
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {aboutPage.roles.map((role, index) => (
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
            {aboutPage.bioInfo.map((item, index) => (
              <p key={index}>
                <b>{item.label}</b> {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
