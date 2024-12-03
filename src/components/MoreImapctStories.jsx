import { useState } from "react";
import aibg from "../assets/615107.jpg";

const MoreImpactStories = () => {
  const [activeTab, setActiveTab] = useState("Gujarat");

  const tabs = ["Gujarat", "Maharashtra", "Delhi", "Institute Representative"];
  const stories = [
    {
      id: 1,
      name: "Azba Malek",
      institution: "Vidyadeep University CU Gujarat",
      description:
        "Reflecting on her journey, Azba initially harbored dreams of becoming a doctor...",
      image: aibg,
      region: "Gujarat",
    },
    {
      id: 2,
      name: "Chahat Tiwari",
      institution: "PACIFIC SCHOOL OF ENGINEERING CU Gujarat",
      description:
        "Through this program, I've delved deep into the world of AI and ML...",
      image: aibg,
      region: "Gujarat",
    },
    {
      id: 3,
      name: "Mann Pandya",
      institution:
        "Sardar Vallabhbhai Patel Institute of Technology CU Gujarat",
      description:
        "Mann's decision to pursue engineering was heavily influenced by his father's passion...",
      image: aibg,
      region: "Gujarat",
    },
  ];

  return (
    <div className="w-full bg-white">
      <h1 className="text-4xl font-bold text-center text-white bg-blue-500 py-6 mb-8">
        Impact Stories
      </h1>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories
            .filter((story) => story.region === activeTab)
            .map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <div className="w-full relative pt-[66.67%]">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-blue-500 mb-1">
                    {story.name}
                  </h3>
                  <h4 className="text-sm font-medium text-gray-800 mb-2">
                    {story.institution}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {story.description}
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors self-start">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoreImpactStories;
