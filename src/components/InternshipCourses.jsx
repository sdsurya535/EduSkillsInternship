import React from "react";
import DomainImage from "../assets/domain.jpeg";
import WaveImage from "../assets/waveBg.jpg"; 
import "./style/internCourse.css"
const InternshipCourses = () => {
  return (
    <section className="bg-cover max-h-[900px] bg-no-repeat bg-center bg-slate-100 overflow-hidden h-screen my-10 md:my-0  relative" style={{backgroundImage:`url(${WaveImage})`}}>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100vw"
        className="h-[800px] md:h-[600px]" 
        viewBox="0 -8.992806499463768e-14 1380 810"
        preserveAspectRatio="xMidYMid meet"
        style={{
          transform: "translateX(-20px) translateY(-120px) scale(2)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <rect
          id="svgEditorBackground"
          x="0"
          y="0"
          width="1380"
        //   height="810"
          style={{ fill: "none", stroke: "none" }}
        ></rect>
        <defs id="svgEditorDefs">
          <polygon
            id="svgEditorShapeDefs"
            style={{ fill: "khaki", stroke: "black", strokeWidth: "1px" }}
          ></polygon>
          <path
            id="svgEditorClosePathDefs"
            style={{ stroke: "black", strokeWidth: "1px", fill: "khaki" }}
          ></path>
        </defs>
        <path
          d="M15083.791600683318,645.6720847341486c496.6000000000058,747.7999999999951,1953.3704016668416,1862.6734725832403,2751.999999999978,1967.9999999999955s1884.300000000003,-198.89999999999964,2718.7056474818382,-552.6365690040448s1746.4898225846773,-519.9524548776521,2593.2943525181545,-567.3634309959566s2251,-23.399999999999636,4384,1520.0000000000032s3205.199999999997,1437.2000000000025,4047.9999999999854,1520.0000000000018s3305.000000000029,-270.2999999999993,4640.000000000029,-1152s74.60000000000582,3328.3000000000065,32,3792.0000000000073s-19509.4,4591.000000000004,-21087.999999999993,-128.00000000000182s-1679.5999999999913,-6358.300000000001,-80,-6400Z"
          style={{
            stroke: "black",
            fill: "hsl(215, 100%, 90%)",
            strokeWidth: "0px",
          }}
          id="e12_areaS3"
          transform="matrix(0.0650006 -0.00123765 0.00123765 0.0650006 -995.543 317.589)"
        ></path>
        <path
          d="M12434.469938292996,-979.2324603008726c496.600000000004,747.8000000000001,1953.3704016668398,1862.673472583247,2752.000000000018,1967.9999999999995s1884.2999999999865,-198.90000000000055,2718.7056474818364,-552.6365690040473s1746.4898225846846,-519.9524548776479,2593.2943525181618,-567.3634309959524s2251,-23.400000000001455,4384,1520s3205.199999999997,1437.1999999999962,4048,1519.9999999999955s3304.9999999999927,-270.3000000000011,4640,-1151.9999999999955s74.60000000000582,3328.3,32,3791.9999999999955s-19509.400000000023,4590.999999999997,-21088.000000000015,-127.99999999999818s-1679.5999999999985,-6358.300000000008,-80,-6400.0000000000055Z"
          style={{
            stroke: "black",
            fill: "hsl(215, 100%, 80%)",
            strokeWidth: "0px",
          }}
          id="e19_areaS3"
          transform="matrix(0.0647268 0.00608646 -0.00608646 0.0647268 -823.261 331.266)"
        ></path>
        <text
          dy="-0.5em"
          style={{ fill: "black", fontFamily: "Arial", fontSize: "20px" }}
          id="e14_texte"
          transform="matrix(0.0640454 0 0 0.0640454 -832.187 329.878)"
        >
          <textPath id="e13_textPath" xlinkHref="#e12_areaS3">
            T
          </textPath>
        </text>
      </svg> */}
      <div className="flex justify-center w-[100%] p-4 absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 mt-24 sm:mt-10 md:mt-5 lg:mt-0 -translate-y-1/2">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-opacity-80 bg-slate-100 px-5 md:px-14 lg:px-16 py-10 rounded-2xl container">
          <div className="lg:w-1/2">
            <h2 className="xl:text-4xl lg:text-[2.5rem] font-semibold text-[2rem] text-black mb-4 lg:mb-6">
              Internship Courses
            </h2>
            <p className="text-lg lg:text-inherit text-gray-700 mb-4 lg:mb-6">
              Technological advancement is an extended idea of technology. While
              technology is a rather-well specified concept.
            </p>
            <div className="space-x-4 text-center md:text-left">
              <a
                href="internship.php"
                className="inline-block md:text-[1rem] text-sm px-3 py-3 md:px-8 md:py-3 bg-custom-blue text-white font-semibold rounded-full transition duration-300 hover:bg-blue-700"
              >
                READ MORE
              </a>
              <a
                href="#"
                className="inline-block md:text-[1rem] text-sm px-3 py-3 md:px-8 md:py-3 bg-gray-300 text-gray-800 font-semibold rounded-full transition duration-300 hover:bg-gray-400"
              >
                ENROLL NOW
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
            <img src={DomainImage} alt="Web Design Template" className="h-[400px] rounded-lg z-50 top-1/2 left-1/2 animate-float bg-glow-blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipCourses;
// import React from "react";
// import DomainImage from "../assets/waveBg.jpg"; // Assuming your background image path
// import "./style/internCourse.css"

// const InternshipCourses = () => {
//   return (
//     <section
//       className="bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden relative"
//       style={{ backgroundImage: `url(${DomainImage})` }}
//     >
//       <div className="flex justify-center w-[100%] p-4 absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-opacity-60 bg-slate-100 px-20 py-10 rounded-2xl container">
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl lg:text-[3.8rem] text-black mb-4 lg:mb-6">
//               Internship Courses
//             </h2>
//             <p className="text-lg lg:text-xl text-gray-700 mb-4 lg:mb-6">
//               Technological advancement is an extended idea of technology. While
//               technology is a rather-well specified concept.
//             </p>
//             <div className="space-x-4">
//               <a
//                 href="internship.php"
//                 className="inline-block px-8 py-3 bg-custom-blue text-white font-semibold rounded-full transition duration-300 hover:bg-blue-700"
//               >
//                 READ MORE
//               </a>
//               <a
//                 href="#"
//                 className="inline-block px-8 py-3 bg-gray-300 text-gray-800 font-semibold rounded-full transition duration-300 hover:bg-gray-400"
//               >
//                 ENROLL NOW
//               </a>
//             </div>
//           </div>
//           <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center relative">
//             {/* Removed the image element as the background image is set on the section */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InternshipCourses;
