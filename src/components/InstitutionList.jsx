import { useState } from "react";
import InteractiveIndiaMap from "./InteractiveIndiaMap";

// Import all images
import avanthiLogo from "../assets/aibg.jpg";
// import balajiLogo from "../assets/institutions/balaji.png";
// import ellenkiLogo from "../assets/institutions/ellenki.png";
// import jntuLogo from "../assets/institutions/jntu.png";
// import jyothismathiLogo from "../assets/institutions/jyothismathi.png";
// import kgreddyLogo from "../assets/institutions/kgreddy.png";
// import mguLogo from "../assets/institutions/mgu.png";
// import meghaLogo from "../assets/institutions/megha.png";
// import nsakLogo from "../assets/institutions/nsak.png";
// import princetonLogo from "../assets/institutions/princeton.png";
// import rishiLogo from "../assets/institutions/rishi.png";
// import samskrutiLogo from "../assets/institutions/samskruti.png";

const institutions = [
  {
    id: 1,
    name: "Avanthi Institute of Engineering Technology",
    image: avanthiLogo,
  },
  {
    id: 2,
    name: "Balaji Institute of Technology and Science",
    image: avanthiLogo,
  },
  {
    id: 3,
    name: "ELLENKI COLLEGE OF ENGINEERING AND TECHNOLOGY",
    image: avanthiLogo,
  },
  {
    id: 4,
    name: "Jawaharlal Nehru Technological University",
    image: avanthiLogo,
  },
  {
    id: 5,
    name: "Jyothishmathi Group of Institutions",
    image: avanthiLogo,
  },
  {
    id: 6,
    name: "KG Reddy College Of Engineering and Technology",
    image: avanthiLogo,
  },
  {
    id: 7,
    name: "Mahatma Gandhi University",
    image: avanthiLogo,
  },
  {
    id: 8,
    name: "Megha Institute of Engineering and Technology for Women",
    image: avanthiLogo,
  },
  {
    id: 9,
    name: "Nawab Shah Alam Khan University",
    image: avanthiLogo,
  },
  {
    id: 10,
    name: "Princeton Institute of Engineering and Technology for Women",
    image: avanthiLogo,
  },
  {
    id: 11,
    name: "Rishi M.S Institute of Engineering and Technology for Women",
    image: avanthiLogo,
  },
  {
    id: 12,
    name: "Samskruti College of Engineering & Technology",
    image: avanthiLogo,
  },
];

const PartnerInstitutions = () => {
  const [activeTab, setActiveTab] = useState("CoE Partners");

  return (
    <div className="w-full">
      <div className="w-full bg-blue-500 py-4">
        <h1 className="text-2xl font-bold text-white text-center">
          Partner Institutions
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex gap-1 p-2 border-b">
          {["CoE Partners", "CoE Partners Location"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-sm rounded ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === "CoE Partners" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {institutions.map((institution) => (
                <div
                  key={institution.id}
                  className="flex flex-col items-center p-4 border rounded hover:shadow-md transition-all duration-300 group h-48"
                >
                  <div className="flex-1 w-full flex items-center justify-center mb-3">
                    <img
                      src={institution.image}
                      alt={institution.name}
                      className="w-full h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xs text-center text-gray-800 line-clamp-2">
                    {institution.name}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              <InteractiveIndiaMap />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerInstitutions;
