import React from 'react';
import Google from "../assets/partners/google.png"
import AWS from "../assets/partners/aws1.png"
import Juniper from "../assets/partners/juniper1.png"
import Paloalto from "../assets/partners/paloalto-img.png"
import Microchip from "../assets/partners/microchip-new.png"
import Blueprism from "../assets/partners/blueprsm1.png"
import Fortinet from "../assets/partners/fortinet-new.png"
import Zscalar from "../assets/partners/zscalar-new.png"
import Uipath from "../assets/partners/uipath.jpg"
import Alltryx from "../assets/partners/alltryx.png"
import Altair from "../assets/partners/Altair.png"
import Celonis from "../assets/partners/Celonis_Logo.png"
import Bentley from "../assets/partners/BentleyLOGO.png"


const partners = [
  { name: "Google", logo: Google },
  { name: "AWS", logo: AWS },
  { name: "Juniper", logo: Juniper },
  { name: "Paloalto", logo: Paloalto },
  { name: "Microchip", logo: Microchip },
  { name: "Blueprism", logo: Blueprism },
  { name: "Fortinet", logo: Fortinet },
  { name: "Zscalar", logo: Zscalar },
  { name: "Uipath", logo: Uipath },
  { name: "Alltryx", logo: Alltryx },
  { name: "Altair", logo: Altair },
  { name: "Celonis", logo: Celonis },
  { name: "Bentley", logo: Bentley },
  // Add other partners similarly
];

function Partners() {
  return (
    <section className="bg-white py-20" id="partners">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-5xl">Corporate Partners</h2>
          <p className="text-lg text-gray-600 mt-3">
            Meet our stunning Corporates, with which we collaborate for several years.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {partners.map(partner => (
            <div key={partner.name} className="m-4 w-[180px]">
              <a href="#" className="block p-4 shadow-lg rounded-lg">
                <img src={partner.logo} alt={partner.name} className="mx-auto h-10"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
