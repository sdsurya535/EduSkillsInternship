import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import InternshipCourses from "../components/InternshipCourses";
import Process from "../components/Process";
import TrustedAcademy from "../components/TrustedAcademy";
import Achievements from "../components/Achivements";
import Statistics from "../components/Statistics";
import Partners from "../components/Partners";
import CohortDetails from "../components/CohortDetails";
import Internship from "../components/Internship";
import Program from "../components/ProgramSection";
import ImpactStoriesCarousel from "../components/ImpactStories";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Experience />
      <InternshipCourses />
      <ImpactStoriesCarousel />
      <CohortDetails />
      <Process />
      <Program />
      <TrustedAcademy />
      <Achievements />
      <Statistics />
      <Partners />
    </div>
  );
};

export default HomePage;
