import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser, FaTools, FaDev } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Logo */}
      <Link to="/" className="for-logo fixed top-4 left-6 z-30 text-white font-bold text-lg">
        PB
      </Link>

      {/* Sidebar - Only for md and up */}
      <div
        className="hidden md:flex fixed top-2/3 left-4 -translate-y-1/2 z-30 flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hamburger Icon */}
        <div className="text-white mb-4 p-2 rounded-full hover:bg-gray-700 transition">
          <GiHamburgerMenu size={15} />
        </div>

        {/* Animated Icon Menu */}
        <div
          className={`flex flex-col gap-6 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out
            ${isHovered ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'}`}
        >
          <a href="#about-section" className="text-white hover:text-gray-400 transition">
            <FaUser />
          </a>
          <a href="#skill-section" className="text-white hover:text-gray-400 transition">
            <FaTools />
          </a>
          <a href="#project-section" className="text-white hover:text-gray-400 transition">
            <FaDev />
          </a>
          <a href="#contact-section" className="text-white hover:text-gray-400 transition">
            <MdContactPhone />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
