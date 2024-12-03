import React, { useRef, useEffect } from "react";
import Banner from "../assets/internship.jpg";

const InternHero = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div
          style={{
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            className="text-5xl text-white mb-4 text-shadow"
            style={{
              fontSize: "60px",
              maxWidth: 550,
              alignItems: "center",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Internships
          </h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${Banner})`,
          maxHeight: 160,
          filter: "brightness(0.8)",
          zIndex: -1,
          backgroundPosition: "right center",
        }}
        ref={parallaxRef}
      ></div>
    </div>
  );
};

export default InternHero;
