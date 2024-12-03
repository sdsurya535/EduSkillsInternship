import React from "react";
import MapChart from "./cards/MapChart";

const Achievements = () => {
  return (
    <section className="text-center bg-slate-50 pt-20" id="content07-7w">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl pb-6 pt-2">Our Achievements</h2>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full lg:w-1/2 px-6 text-left">
              <p className="text-lg mt-5 text-justify">
                The effective exploitation of originalities is vital to a
                service being able to improve its procedures, bring new
                asfgdfgdfgdfs well as improved products and services to market,
                boost its efficiency and also, most notably, enhance its
                productivity. Would you like to try Web Page Design Template?
                procedures, bring new asfgdfgdfgdfs well as improved products
                and services to market, boost its efficiency and also, most
                notably, enhance its productivity. Would you like to try Web
                Page Design Template?
              </p>
            </div>
            <div className="w-full lg:w-1/3 text-left">
              <div className="h-[400px] lg:h-[300px] md:h-[600px] sm:h-[500]">
                {" "}
                {/* Increased height here */}
                <MapChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
