import React from "react";
import program from "../assets/program.jpg";

const StatCard = ({ number, text, image = program }) => (
  <div className="flex items-center h-auto">
    <div className="w-full flex gap-4">
      {" "}
      {/* Added gap-4 here */}
      <div className="w-1/2">
        <img
          src={image}
          alt="Program"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="w-1/2 bg-sky-500 p-8 text-white text-center rounded flex flex-col justify-center h-full">
        <div className="text-5xl font-bold mb-2">{number}</div>
        <div className="text-lg">{text}</div>
      </div>
    </div>
  </div>
);

const Program = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Program Presence Section */}
      <div className="bg-yellow-400 py-3">
        <h2 className="text-2xl font-bold text-center">
          Program Presence (24-25)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard number="3" text="States" />
        <StatCard number="21" text="Districts" />
        <StatCard number="62" text="Centres of Excellence" />
      </div>

      {/* Program Impact Section */}
      <div className="bg-yellow-400 py-3">
        <h2 className="text-2xl font-bold text-center">
          Program Impact 2023-24
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard number="3400+" text="Students Trained and Certified" />
        <StatCard number="300+" text="Faculty Members Trained" />
        <StatCard number="1000+" text="Capstone Projects Developed" />
      </div>
    </div>
  );
};

export default Program;
