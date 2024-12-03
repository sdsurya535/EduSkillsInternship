import React from "react";
import Card from "./cards/DynamicCard";
import AWS from "../assets/partners/aws1.png";
import Juniper from "../assets/partners/juniper1.png";
import Microchip from "../assets/partners/Microchip Logo.png";
import Blueprism from "../assets/partners/blueprsm1.png";
import Paloalto from "../assets/partners/palo-alto-networks-inc-logo-vector.png";
import Uipath from "../assets/partners/uipath.jpg";
import Celonis from "../assets/partners/Celonis_Logo.png";
import Alltryx from "../assets/partners/alltryx1.png";
import Fortinet from "../assets/partners/Fortinet Logo.png";
import Google from "../assets/partners/google_new1.png";
import Zscaler from "../assets/partners/Zscaler 3.png";
import Bentley from "../assets/partners/BentleyLOGO.png";
import Ansys from "../assets/partners/ANSYSL.png";
import Altair from "../assets/partners/Altair.png";
import EduSkills from "../assets/logo.png";

const Internship = () => {
  // Sample data for cards
  const cardsData = [
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: AWS,
      body: "CLOUD VIRTUAL INTERNSHIP",
      size: "20%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: AWS,
      body: "DATA ENGINEERING VIRTUAL INTERNSHIP",
      size: "20%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: AWS,
      body: "AI-ML VIRTUAL INTERNSHIP PROGRAM",
      size: "20%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Juniper,
      body: "NETWORKING VIRTUAL INTERNSHIP PROGRAM",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Juniper,
      body: "NETWORKING CLOUD VIRTUAL INTERNSHIP PROGRAM",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Juniper,
      body: "MIST-AI VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Microchip,
      body: "EMBEDDED SYSTEM DEVELOPER VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Blueprism,
      body: "INTELLIGENT AUTOMATION  VIRTUAL INTERNSHIP",
      size: "60%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Paloalto,
      body: "CYBERSECURITY VIRTUAL INTERNSHIP PROGRAM",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Uipath,
      body: "ROBOTIC PROCESS AUTOMATION (RPA) DEVELOPER VIRTUAL INTERNSHIP PROGRAM",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Celonis,
      body: "PROCESS MINING VIRTUAL INTERNSHIP PROGRAM",
      size: "40%",
    },{
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Celonis,
      body: "BUSINESS ANALYST VIRTUAL INTERNSHIP PROGRAM",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Alltryx,
      body: "DATA ANALYTICS PROCESS AUTOMATION VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Fortinet,
      body: "NETWORK SECURITY ASSOCIATE VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Google,
      body: "ANDROID DEVELOPER VIRTUAL INTERNSHIP",
      size: "60%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Zscaler,
      body: "ZERO TRUST CLOUD SECURITY VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Zscaler,
      body: "NETWORKING VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Bentley,
      body: "STRUCTURAL ANALYSIS WITH STAAD. PRO VIRTUAL INTERNSHIP",
      size: "40%",
    },{
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Bentley,
      body: "WATER RESOURCE MANAGEMENT VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Ansys,
      body: "STRUCTURAL ANALYSIS VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Ansys,
      body: "ELECTROMAGNETIC ANALYSIS VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Ansys,
      body: "FLUIDS DYNAMICS VIRTUAL INTERNSHIP",
      size: "40%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: EduSkills,
      body: "WEB FULL STACK DEVELOPER VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: EduSkills,
      body: "JAVA FULL STACK DEVELOPER VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: EduSkills,
      body: "ETHICAL HACKING VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Altair,
      body: "DATA SCIENCE MASTER VIRTUAL INTERNSHIP",
      size: "50%",
    },
    {
      title: "CLOUD VIRTUAL INTERNSHIP",
      imageUrl: Altair,
      body: "CONCEPTUAL CAE DESIGN AND SIMULATION VIRTUAL INTERNSHIP",
      size: "50%",
    },

    // Add more card data as needed
  ];

  return (
    <div className="mx-auto container">
      <div className="text-center">
        <h3 className="pb-3 text-2xl font-medium text-center">
          Transform your Knowledge into experience
        </h3>
        <p className="text-sm text-gray-600 text-center">
          Building a successful career journey is not that easy, we will help
          you to launch a great professional career. Follow these simple steps
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto mb-4">
        {/* Map through the card data */}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            body={card.body}
            size={card.size}
          />
        ))}
      </div>
    </div>
  );
};

export default Internship;
