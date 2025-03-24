import profilePic from "./../assets/svg/About/me_wave.svg"; // Add your profile image here
import data from "./../../data.json";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-gray-50 text-gray-900 p-6"
      style={{ height: "calc(100vh - 80px)" }}
    >
      {/* Profile Card */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row p-6 md:p-10 transition-all duration-500 hover:shadow-2xl">
        {/* Left - Profile Picture */}
        <div className="relative flex-shrink-0 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img
            src={profilePic}
            alt="Geevarghese Regi"
            className="w-full h-full object-cover relative top-3"
          />
        </div>

        {/* Right - Info Section */}
        <div className="flex-1 flex flex-col justify-center px-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
          <p className="text-lg text-gray-600 mt-2">
            {data.card.about.text.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="text-md text-gray-500 mt-3">
            {data.card.about.subText}
          </p>

          {/* Titles / Roles */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Roles:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {data.title.map((role, index) => (
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
              <strong>🏢 Company:</strong> {data.card.bio.company}
            </p>
            <p>
              <strong>📍 Location:</strong> {data.card.bio.location}
            </p>
            <p>
              <strong>🎓 Education:</strong> {data.card.bio.education}
            </p>
            <p>
              <strong>📜 Degree:</strong> {data.card.bio.degree}
            </p>
            <p>
              <strong>🎓 Graduation:</strong> {data.card.bio.graduation}
            </p>
          </div>

          {/* Contact Links */}
        </div>
      </div>
    </div>
  );
};

export default About;
