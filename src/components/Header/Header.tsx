import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [clicked, setClicked] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setClicked(link);
    setTimeout(() => setClicked(null), 200); // Reset after animation
  };

  return (
    <div className="w-full flex justify-between items-center p-6 bg-white shadow-md">
      {/* Left Side - Name */}
      <div>
        <div className="font-bold text-xl">Geevarghese Regi</div>
        <div className="font-semibold text-sm text-[#797979]">karivarkey</div>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-6 text-lg">
          {["/", "/about", "/projects", "/contact"].map((link, index) => (
            <li key={index}>
              <Link
                to={link}
                onClick={() => handleClick(link)}
                className={`
                  relative px-3 py-2 transition-all duration-200
                  ${
                    path === link
                      ? "text-black font-semibold after:w-full"
                      : "text-gray-500 hover:text-black after:w-0"
                  }
                  after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300
                  ${clicked === link ? "scale-90" : "scale-100"}
                `}
              >
                {link === "/"
                  ? "Home"
                  : link.replace("/", "").charAt(0).toUpperCase() +
                    link.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
