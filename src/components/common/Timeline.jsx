import React from "react";
import TimelineEntry from "./TimelineEntry";
import Aug2021 from "../../assets/jrny/aug-2021.png";
import Acia from "../../assets/jrny/Acia.png";
import Altx from "../../assets/partners/alltryx1.png";
import Uipath from "../../assets/partners/uipath.jpg";
import Microchip from "../../assets/partners/microchip-new.png";
import Fortinet from "../../assets/partners/fortinet-new.png";
import Google from "../../assets/partners/google_new1.png";
import Bentley from "../../assets/partners/BentleyLOGO.png";
import Zscaler from "../../assets/partners/zscalar-new.png";
import WonderBotz from "../../assets/partners/WonderBotz.jpg";
import Altair from "../../assets/partners/altair.jpg";

const events = [
  {
    id: 1,
    title: "AICTE - EduSkills Virtual Internship Launched",
    description: "",
    date: "August 2021",
    images: [{ id: 1, img: Aug2021, size: 30 }],
    side: "right",
  },
  {
    id: 2,
    title: "Cohort - 1 Launched(8 Domains)",
    description: "",
    date: "September 2021",
    side: "left",
  },
  {
    id: 3,
    title: "Cohort - 2 Launched(10 Domains)",
    description: "",
    date: "January 2022",
    side: "right",
  },
  {
    id: 4,
    title: "Cohort - 3 Launched(9 Domains)",
    description: "Onboarded",
    images: [{ id: 1, img: Altx, size: 30 }],
    date: "June 2022",
    side: "left",
  },
  {
    id: 5,
    title: "",
    description: "Onboarded",
    images: [{ id: 1, img: Uipath, size: 30 }],
    date: "July 2022",
    side: "right",
  },
  {
    id: 6,
    title: "Mega job Fair Supported By AWS",
    description: "",
    date: "September 2022",
    side: "left",
  },
  {
    id: 7,
    title: "Cohort - 4 Launched(10 Domains)",
    description: "",
    date: "October 2022",
    side: "right",
  },
  {
    id: 8,
    title: "AICTE - EduSkills Virtual Internship All India Ranking Launched",
    description: "",
    date: "November 2022",
    side: "left",
  },
  {
    id: 9,
    title: "",
    description: "Onboarded",
    images: [
      { id: 1, img: Microchip, size: 30 },
      { id: 1, img: Fortinet, size: 30 },
    ],
    date: "March 2023",
    side: "right",
  },
  {
    id: 10,
    title: "Cohort - 5 Launched(12 Domains)",
    description: "",
    date: "April 2023",
    side: "left",
  },
  {
    id: 11,
    title: "Virtual Internship Offered To 1 Lakh Students",
    description: "",
    date: "May 2023",
    side: "right",
  },
  {
    id: 12,
    title: "Educators' Industry Visit To Juniper",
    description: "",
    date: "June 2023",
    side: "left",
  },
  {
    id: 13,
    title: "Onboarded Zscaler",
    description: "3000 Students Hiring By WonderBotz",
    images: [
      { id: 1, img: Zscaler, size: 30 },
      { id: 1, img: WonderBotz, size: 30 },
    ],
    date: "July 2023",
    side: "right",
  },
  {
    id: 14,
    title: "Cohort - 6 Launched(15 Domains)",
    description: "Onboarded",
    images: [
      { id: 1, img: Google, size: 30 },
      { id: 1, img: Bentley, size: 30 },
    ],
    date: "August 2023",
    side: "left",
  },
  {
    id: 15,
    title: "Greatest Achivement",
    description: "",
    images: [{ id: 1, img: Acia, size: 60 }],
    date: "",
    side: "right",
  },
  {
    id: 16,
    title: "Cohort - 7 Launched(17 Domains)",
    description: "Google AI-ML Bently Water Resources",
    date: "January 2024",
    side: "left",
  },
  {
    id: 17,
    title: "Cohort - 8 Launched(19 Domains)",
    images: [{ id: 1, img: Altair, size: 40 }],
    date: "April 2024",
    side: "right",
  },
  // Add more events as needed
];

function Timeline() {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1515428895957-2d42d4d88303?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className=" lg:mx-auto w-full h-full md:p-10"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", // Cover the entire area of the container
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Do not repeat the background image
        backgroundAttachment: "fixed",
      }}
    >
      <h2
        className="flex justify-center mb-4 font-bold text-4xl text-white"
        style={{
          fontFamily: "cursive",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        Our Journey
      </h2>
      <div className="relative wrap overflow-hidden h-full">
        <div
          className="border-2-2 absolute border-opacity-50 border-gray-50 h-full border"
          style={{ left: "50%" }}
        ></div>
        {events.map((event) => (
          <TimelineEntry key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
