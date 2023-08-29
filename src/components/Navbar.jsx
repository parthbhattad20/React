import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white font-semibold text-lg">Cricket Team</h1>
        </div>
        <ul className={`hidden md:flex space-x-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="achievements"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-300"
            >
              Achievements
            </Link>
          </li>
          <li>
            <Link
              to="selections"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-300"
            >
              Selections
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white block focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {isMobileMenuOpen && (
            <ul className="bg-blue-500 absolute top-12 left-0 w-full py-2 space-y-2 text-center">
              {/* Mobile menu links */}
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMobileMenu}
                  className="text-white cursor-pointer hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="achievements"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMobileMenu}
                  className="text-white cursor-pointer hover:text-gray-300"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  to="selections"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMobileMenu}
                  className="text-white cursor-pointer hover:text-gray-300"
                >
                  Selections
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
