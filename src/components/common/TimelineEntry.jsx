/* eslint-disable react/prop-types */
// import React from "react";
// import { useInView } from "react-intersection-observer";

// function TimelineEntry({ event }) {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.5, // Trigger when 50% of the element is in view
//   });

//   const isRight = event.side === "right";

//   return (
//     <div
//       ref={ref}
//       className={`mb-8 my-5 flex duration-1000 ${
//         inView ? "opacity-100" : "opacity-0"
//       } justify-center ${isRight ? "flex-row" : "flex-row-reverse"} `}
//     >
//       {/* Date on the side opposite the card */}
//       <div
//         className={`order-1 w-5/12 flex mx-4 ${
//           isRight ? "justify-end" : "justify-start"
//         } `}
//       >
//         <span className="text-lg font-medium text-gray-50">{event.date}</span>
//       </div>

//       {/* Circular icon in the middle */}
//       <div className="z-20 flex items-center order-2 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
//         <h1 className="mx-auto text-white font-semibold text-lg">{event.id}</h1>
//       </div>

//       {/* Content Card */}
//       <div
//         className={`order-3 transition-opacity mx-4 duration-1000 ${
//           inView ? "opacity-100" : "opacity-0"
//         }
//           ${
//             isRight ? "animate-slide-in-right" : "animate-slide-in-left"
//           } bg-opacity-30 rounded-lg shadow-xl w-5/12 px-6 py-4 bg-gray-100`}
//       >
//         <h3 className="mb-3 font-bold text-xl text-white">{event.title}</h3>
//         <p className="text-sm font-medium leading-snug tracking-wide text-white">
//           {event.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default TimelineEntry;
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function TimelineEntry({ event }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isRight = event.side === "right" || isSmallScreen;

  return (
    <div
      ref={ref}
      className={`mb-8 my-5 flex duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      } justify-center items-start ${isRight ? "flex-row" : "flex-row-reverse"} `}
    >
      {/* Date on the side opposite the card */}
      <div
        className={`order-1 w-5/12 flex mx-4 ${
          isRight ? "justify-end" : "justify-start"
        } `}
      >
        <span className="text-lg font-medium text-gray-50">{event.date}</span>
      </div>

      {/* Circular icon in the middle */}
      <div className="z-20 flex items-center order-2 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">{event.id}</h1>
      </div>

      {/* Content Card */}
      <div
        className={`order-3 transition-opacity mx-4 duration-1000 ${
          inView ? "opacity-100" : "opacity-0"
        }
          ${
            isRight ? "animate-slide-in-right" : "animate-slide-in-left"
          } bg-opacity-30 rounded-lg shadow-xl w-5/12 px-6 py-4 bg-gray-100`}
      >
        <h3 className="mb-3 font-bold text-lg text-white">{event.title}</h3>
        <p className="text-md font-medium leading-snug tracking-wide text-white">
          {event.description}
        </p>
        {/* Images display section */}
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-2 mt-4 overflow-x-auto">
          {event?.images?.map((image, index) => (
            <img
              key={index}
              src={image.img}
              alt={`Event Image ${index + 1}`}
              className="rounded-sm mb-2 sm:mb-0"
              style={{ maxHeight: image.size }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimelineEntry;
