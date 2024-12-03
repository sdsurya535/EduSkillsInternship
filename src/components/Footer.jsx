import React from "react";
import Logo from "../assets/logo-white.png";
const Footer = () => {
  return (
    <footer className="bg-[#002d62] py-12">
      <div className="flex items-center max-w-7xl mx-auto px-8 text-white bg-[#002d62] min-h-[250px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#">
              <img src={Logo} alt="Web Site Design Template" className="mb-4" />
            </a>
            <p className="text-base">
              We would be happy to answer your questions.
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Quick Links</h5>
            <ul className="list-none m-0 p-0">
              <li className="mb-2">
                <a href="#" className="text-base">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-base">
                  Cohort Details
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-base">
                  Internship Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Corp. Office:</h5>
            <p className="text-base">
              2nd Floor, ISTE Annex Building, IIT Delhi Campus, Shaheed Jeet
              Singh Marg, New Delhi - 110016
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Head Office:</h5>
            <p className="text-base">
              #806, DLF Cyber City, Info Park, Technology Corridor, Bhubaneswar
              - 751024, Odisha, India.
            </p>
            <p
              className="text-base"
              style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              <i className="fa-regular fa-envelope"></i>
              &nbsp;&nbsp;support@eduskillsfoundation.org
            </p>
            <p className="text-base">
              <i className="fa-solid fa-phone-volume"></i>
              &nbsp;&nbsp;0674-2951797
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
