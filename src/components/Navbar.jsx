import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 text-custom-blue bg-white">
      <div className="h-14 mx-auto flex items-center px-4">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-custom-blue focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 transform transition-transform duration-500 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 transform transition-transform duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop and Mobile Menu */}
        <div
          className={`${
            isOpen
              ? "absolute top-14 left-0 right-0 bg-white border-b border-gray-200"
              : "hidden lg:flex"
          } lg:relative lg:top-0 lg:flex-1 lg:justify-center`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
            <a
              href="/"
              className="text-sm hover:text-blue-700 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/our-journey"
              className="text-sm hover:text-blue-700 transition-colors duration-200"
            >
              Journey
            </a>

            {/* Institute Dropdown - Desktop */}
            <div className="relative group hidden lg:block">
              <button
                className="text-sm hover:text-blue-700 transition-colors duration-200 flex items-center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Institute
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a
                  href="/partner"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                >
                  Partner Institutes
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                >
                  Gallery
                </a>
              </div>
            </div>

            {/* Institute Dropdown - Mobile */}
            <div className="lg:hidden flex flex-col items-center w-full space-y-2">
              <button
                onClick={toggleMobileDropdown}
                className="text-sm hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Institute</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`flex flex-col items-center w-full space-y-2 overflow-hidden transition-all duration-300 ${
                  isMobileDropdownOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <a
                  href="/partner"
                  className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-200"
                >
                  Partner Institutes
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-blue-700 transition-colors duration-200"
                >
                  Gallery
                </a>
              </div>
            </div>

            <a
              href="/internship"
              className="text-sm hover:text-blue-700 transition-colors duration-200"
            >
              Internship
            </a>
            <button className="bg-custom-blue hover:bg-blue-700 text-white text-sm font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
