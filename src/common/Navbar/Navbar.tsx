import { Link } from "react-router-dom";
// import { navData } from '../../data/navData';
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import logo from "../../assets/images/log.png";
function Navbar() {
  const navData = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Habeeb.World"
            className="h-16 w-auto lg:h-20 object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navData.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group relative text-[16px] font-bold text-[#183055] transition duration-300 hover:text-[#C82463]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#DB3E73] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/login"
            className="rounded-full border-2 border-[#DB3E73] px-6 py-2.5 font-semibold text-[#b1275b] transition-all duration-300 hover:bg-[#C82463] hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-[#b1275b] px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#8f1d49] hover:shadow-xl"
          >
            Register Free
          </Link>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navData={navData}
        />
      </div>
    </header>
  );
}

export default Navbar;
