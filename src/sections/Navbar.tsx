import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => {}, isMobile = false }) => (
  <ul className={`flex ${isMobile ? "flex-col space-y-6" : "space-x-8"}`}>
    {navLinks.map((item) => (
      <li key={item.id}>
        <a
          href={item.href}
          className="text-neutral-400 hover:text-white font-medium transition-colors duration-300 text-base relative group"
          onClick={onClick}
        >
          {item.name}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    ))}
  </ul>
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            className="text-white font-bold text-2xl hover:text-neutral-300 transition-colors duration-300"
          >
            Junior Reis<span className="text-blue-500">.</span>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden items-center">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-black/95 px-4 py-5">
          <NavItems onClick={closeMenu} isMobile={true} />
        </nav>
      </div>
    </header>
  );
}
