import { useLocation } from "react-router-dom";

const Header = () => {
  // Fetch current path
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="w-full flex justify-between items-center p-4">
      <div>
        <div className="font-bold text-lg">Geevarghese Regi</div>
        <div className="font-semibold text-xs text-[#797979]">KARIVARKEY</div>
      </div>
      <div>
        <li className="flex space-x-4">
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Projects</ul>
          <ul>Contact</ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
