import React from "react";
import Logo1 from "../assets/logo.png";
import Logo2 from "../assets/aicte-logo-top.png";
import Logo3 from "../assets/neat-logo-top.png";
import Logo4 from "../assets/MHRD_new_logo_2.png";

const Header = ({ hidden }) => {
  return (
    <header
      className={`flex items-center justify-center py-2 px-8 bg-white border-b border-gray-200 transition-transform duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="flex items-center flex-wrap justify-center"
        style={{ maxWidth: "1700px" }}
      >
        <img src={Logo4} alt="Logo 4" className="h-8 lg:h-10" />

        <div className="w-px h-12 bg-gray-300 mx-5"></div>
        <img src={Logo2} alt="Logo 2" className="h-8 lg:h-10" />
        {/* Conditional rendering for Logo 3 and Logo 4 */}
        <div className="hidden sm:flex items-center w-px h-12 bg-gray-300 mx-5"></div>
        <img src={Logo3} alt="Logo 3" className="h-8 lg:h-10" />
        <div className="w-px h-12 bg-gray-300 mx-5"></div>
        <img src={Logo1} alt="Logo 1" className="h-8 lg:h-10" />
      </div>
    </header>
  );
};

export default Header;
