import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Import your images
import Inst1 from "../assets/Logo_Colleges/1.png";
import Inst2 from "../assets/Logo_Colleges/2.jpg";
import Inst3 from "../assets/Logo_Colleges/3.jpg";
import Inst4 from "../assets/Logo_Colleges/4.jpg";
import Inst5 from "../assets/Logo_Colleges/5.png";
import Inst6 from "../assets/Logo_Colleges/6.jpg";

import Inst7 from "../assets/Logo_Colleges/7.png";
import Inst8 from "../assets/Logo_Colleges/8.jpg";
import Inst9 from "../assets/Logo_Colleges/9.jpg";
import Inst10 from "../assets/Logo_Colleges/10.jpg";
import Inst11 from "../assets/Logo_Colleges/11.jpg";
import Inst12 from "../assets/Logo_Colleges/12.jpg";
import Inst13 from "../assets/Logo_Colleges/13.png";
import Inst14 from "../assets/Logo_Colleges/14.png";
import Inst15 from "../assets/Logo_Colleges/15.png";
import Inst16 from "../assets/Logo_Colleges/16.png";
import Inst17 from "../assets/Logo_Colleges/17.png";
import Inst18 from "../assets/Logo_Colleges/18.jpg";
import Inst19 from "../assets/Logo_Colleges/19.jpg";
import Inst20 from "../assets/Logo_Colleges/20.jpg";
import Inst21 from "../assets/Logo_Colleges/21.png";
import Inst22 from "../assets/Logo_Colleges/22.jpg";
import Inst23 from "../assets/Logo_Colleges/23.jpg";
// import Inst24 from "../assets/Logo_Colleges/24.jpg";
import Inst25 from "../assets/Logo_Colleges/25.png";
import Inst26 from "../assets/Logo_Colleges/26.png";
import Inst27 from "../assets/Logo_Colleges/27.png";
// import Inst28 from "../assets/Logo_Colleges/28.jpg";
import Inst29 from "../assets/Logo_Colleges/29.png";
import Inst30 from "../assets/Logo_Colleges/30.jpg";
import Inst31 from "../assets/Logo_Colleges/31.jpg";
import Inst32 from "../assets/Logo_Colleges/32.png";
import Inst33 from "../assets/Logo_Colleges/33.jpg";
import Inst34 from "../assets/Logo_Colleges/34.png";
import Inst35 from "../assets/Logo_Colleges/35.png";
import Inst36 from "../assets/Logo_Colleges/36.jpg";
import Inst37 from "../assets/Logo_Colleges/37.png";
import Inst38 from "../assets/Logo_Colleges/38.png";
import Inst39 from "../assets/Logo_Colleges/39.png";
import Inst40 from "../assets/Logo_Colleges/40.jpg";
import Inst41 from "../assets/Logo_Colleges/41.jpg";
import Inst42 from "../assets/Logo_Colleges/42.jpg";
// import Inst43 from "../assets/Logo_Colleges/43.jpg";
import Inst44 from "../assets/Logo_Colleges/44.jpg";
import Inst45 from "../assets/Logo_Colleges/45.jpg";
import Inst46 from "../assets/Logo_Colleges/46.jpg";
import Inst47 from "../assets/Logo_Colleges/47.jpg";
import Inst48 from "../assets/Logo_Colleges/48.jpg";
import Inst49 from "../assets/Logo_Colleges/49.png";
import Inst50 from "../assets/Logo_Colleges/50.png";

//.............
import Inst51 from "../assets/Logo_Colleges/51.png";
import Inst52 from "../assets/Logo_Colleges/52.png";
import Inst53 from "../assets/Logo_Colleges/53.jpg";
import Inst54 from "../assets/Logo_Colleges/54.png";
import Inst55 from "../assets/Logo_Colleges/55.jpg";
import Inst56 from "../assets/Logo_Colleges/56.jpg";
import Inst57 from "../assets/Logo_Colleges/57.png";
import Inst58 from "../assets/Logo_Colleges/58.jpg";
import Inst59 from "../assets/Logo_Colleges/59.jpg";
import Inst60 from "../assets/Logo_Colleges/60.jpg";
import Inst61 from "../assets/Logo_Colleges/61.jpg";
import Inst62 from "../assets/Logo_Colleges/62.jpg";
import Inst63 from "../assets/Logo_Colleges/63.jpg";
import Inst64 from "../assets/Logo_Colleges/64.jpg";
import Inst65 from "../assets/Logo_Colleges/65.jpg";
import Inst66 from "../assets/Logo_Colleges/66.jpg";
import Inst67 from "../assets/Logo_Colleges/67.jpg";
import Inst68 from "../assets/Logo_Colleges/68.jpg";
import Inst69 from "../assets/Logo_Colleges/69.jpg";
import Inst70 from "../assets/Logo_Colleges/70.jpg";
import Inst71 from "../assets/Logo_Colleges/71.jpg";
import Inst72 from "../assets/Logo_Colleges/72.png";
import Inst73 from "../assets/Logo_Colleges/73.jpg";
import Inst74 from "../assets/Logo_Colleges/74.jpg";
import Inst75 from "../assets/Logo_Colleges/75.jpg";
import Inst76 from "../assets/Logo_Colleges/76.jpg";
import Inst77 from "../assets/Logo_Colleges/77.jpg";
import Inst78 from "../assets/Logo_Colleges/78.jpg";
import Inst79 from "../assets/Logo_Colleges/79.jpg";
import Inst80 from "../assets/Logo_Colleges/80.jpg";
import Inst81 from "../assets/Logo_Colleges/81.jpg";
import Inst82 from "../assets/Logo_Colleges/82.jpg";
import Inst83 from "../assets/Logo_Colleges/83.jpg";
import Inst84 from "../assets/Logo_Colleges/84.jpg";
import Inst85 from "../assets/Logo_Colleges/85.jpg";
import Inst86 from "../assets/Logo_Colleges/86.jpg";
import Inst87 from "../assets/Logo_Colleges/87.jpg";
import Inst88 from "../assets/Logo_Colleges/88.jpg";
import Inst89 from "../assets/Logo_Colleges/89.jpg";
import Inst90 from "../assets/Logo_Colleges/90.jpg";
import Inst91 from "../assets/Logo_Colleges/91.jpg";
import Inst92 from "../assets/Logo_Colleges/92.png";
import Inst93 from "../assets/Logo_Colleges/93.png";
import Inst94 from "../assets/Logo_Colleges/94.jpg";
import Inst95 from "../assets/Logo_Colleges/95.jpg";
import Inst96 from "../assets/Logo_Colleges/96.jpg";
import Inst97 from "../assets/Logo_Colleges/97.jpg";
import Inst98 from "../assets/Logo_Colleges/98.jpg";
import Inst99 from "../assets/Logo_Colleges/99.jpg";
import Inst100 from "../assets/Logo_Colleges/100.png";

const imageSources1 = [
  Inst1,
  Inst2,
  Inst3,
  Inst4,
  Inst5,
  Inst6,
  Inst7,
  Inst8,
  Inst9,
  Inst10,
  Inst11,
  Inst12,
  Inst13,
  Inst14,
  Inst15,
  Inst16,
  Inst17,
  Inst18,
  Inst19,
  Inst20,
  Inst21,
  Inst22,
  Inst23,
  // Inst24,
  Inst25,
  Inst26,
  Inst27,
  // Inst28,
  Inst29,
  Inst30,
  Inst31,
  Inst32,
  Inst33,
  Inst34,
  Inst35,
  Inst36,
  Inst37,
  Inst38,
  Inst39,
  Inst40,
  Inst41,
  Inst42,
  // Inst43,
  Inst44,
  Inst45,
  Inst46,
  Inst47,
  Inst48,
  Inst49,
  Inst50,
  Inst51,
  Inst52,
  Inst53,
  Inst54,
  Inst55,
  Inst56,
  Inst57,
  Inst58,
  Inst59,
  Inst60,
  Inst61,
  Inst62,
  Inst63,
  Inst64,
  Inst65,
  Inst66,
  Inst67,
  Inst68,
  Inst69,
  Inst70,
  Inst71,
  Inst72,
  Inst73,
  Inst74,
  Inst75,
  Inst76,
  Inst77,
  Inst78,
  Inst79,
  Inst80,
  Inst81,
  Inst82,
  Inst83,
  Inst84,
  Inst85,
  Inst86,
  Inst87,
  Inst88,
  Inst89,
  Inst90,
  Inst91,
  Inst92,
  Inst93,
  Inst94,
  Inst95,
  Inst96,
  Inst97,
  Inst98,
  Inst99,
  Inst100,
];

const imageSources2 = imageSources1.slice().reverse();

// Add more imports as needed

// Keyframes for the scroll animation
const scrollToLeft = keyframes`
  from {
    transform: translateX(0%); /* Start off-screen to the right */
  }
  to {
    transform: translateX(-1200%); /* End off-screen to the left */
  }
`;

const scrollToRight = keyframes`
  from {
    transform: translateX(-1200%); /* Start off-screen to the left */
  }
  to {
    transform: translateX(0%); /* End off-screen to the right */
  }
`;

// Styled-components for the scroller and inner elements
const Scroller = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
  mask: none;
  white-space: nowrap;

  // Adding shadow gradients on the sides
  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%; // Adjust the width of the shadow as needed
    z-index: 2;
    pointer-events: none; // Ensures that the shadow does not interfere with image clicks
  }

  &:before {
    left: 0;
    background: linear-gradient(to right, rgba(260, 260, 260, 1), transparent);
  }

  &:after {
    right: 0;
    background: linear-gradient(to left, rgba(260, 260, 260, 1), transparent);
  }
`;

// const ScrollerInner = styled.div`
//   display: flex;
//   gap: 1rem;
//   animation: ${({ direction }) => direction === 'left' ? scrollToLeft : scrollToRight} ${({ speed }) => speed || "60s"} linear infinite;
//   flex-wrap: nowrap;
// `;
const ScrollerInner = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${({ direction }) =>
      direction === "left" ? scrollToLeft : scrollToRight}
    ${({ speed }) => speed || "60s"} linear infinite;
  flex-wrap: nowrap;
  transform: translateX(
    ${({ direction }) => (direction === "left" ? "100%" : "-100%")}
  ); /* Start all off-screen */
`;

// Adjusting the component to handle potential errors or missing files gracefully (theoretically, since static imports can't catch errors)
const TrustedAcademy = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const handleReduceMotion = () => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const scroller = scrollerRef.current;
        if (scroller) {
          scroller.setAttribute("data-animated", "true");
        }
      }
    };

    handleReduceMotion();
    window.addEventListener("resize", handleReduceMotion); // Recheck on window resize
    return () => window.removeEventListener("resize", handleReduceMotion);
  }, []);

  console.log(imageSources1.length);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-5xl">Our Trusted Accademies</h1>
      <p className="text-center text-xl text-slate-500 mb-4 mt-[-20px]">
        Meet our excelent academies, with which we collaborate for several
        years.
      </p>
      <Scroller ref={scrollerRef}>
        <ScrollerInner direction="right" speed="500s">
          {imageSources1.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              style={{
                width: 120,
                // border: "1px solid gray",
                padding: 5,
                margin: 20,
                borderRadius:5,
                boxShadow: "1px 1px 10px gray",
              }}
            />
          ))}
        </ScrollerInner>
      </Scroller>
      <Scroller ref={scrollerRef}>
        <ScrollerInner direction="left" speed="500s">
          {imageSources2.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              style={{
                width: 120,
                // border: "1px solid gray",
                padding: 5,
                margin: 20,
                borderRadius:5,
                boxShadow: "1px 1px 10px gray",
              }}
            />
          ))}
        </ScrollerInner>
      </Scroller>
    </div>
  );
};

export default TrustedAcademy;
// const scrollAnimation = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// `;

// const Scroller = styled.div`
//   width: 100%;
//   overflow: hidden;
//   position: relative;
//   mask: none;
//   white-space: nowrap;

//   &:after, &:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     width: 10%;
//     z-index: 2;
//     pointer-events: none;
//   }

//   &:before {
//     left: 0;
//     background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);
//   }

//   &:after {
//     right: 0;
//     background: linear-gradient(to left, rgba(0,0,0,0.5), transparent);
//   }
// `;

// const ScrollerInner = styled.div`
//   display: flex;
//   gap: 1rem;
//   width: calc(100% * 2); // Adjust based on your actual content width
//   animation: ${scrollAnimation} ${({ speed }) => speed || "20s"} linear infinite;
// `;

// const continuousImages = [...imageSources1, ...imageSources1]; // Duplicate for seamless scrolling

// const TrustedAcademy = () => {
//   const scrollerRef = useRef(null);

//   useEffect(() => {
//     const handleReduceMotion = () => {
//       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//         const scroller = scrollerRef.current;
//         if (scroller) {
//           scroller.style.animationPlayState = 'paused';
//         }
//       }
//     };

//     window.addEventListener('resize', handleReduceMotion);
//     return () => {
//       window.removeEventListener('resize', handleReduceMotion);
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-center text-2xl font-bold mb-4">Infinite Scroll Animation</h1>
//       <Scroller ref={scrollerRef}>
//         <ScrollerInner speed="60s">
//           {continuousImages.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Logo ${index % imageSources1.length + 1}`}
//               style={{
//                 width: 120,
//                 padding: 5,
//                 margin: 20,
//                 boxShadow: "1px 1px 10px gray",
//               }}
//             />
//           ))}
//         </ScrollerInner>
//       </Scroller>
//     </div>
//   );
// };

// export default TrustedAcademy;
