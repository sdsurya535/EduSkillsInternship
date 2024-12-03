// import React from "react";
// import cohortImg from "../assets/cohort-human.png";

// const CohortCard = () => {
//   return (
//     <div className="mx-auto container">
//       <div className="bg-[#eaf5fe54] p-3 rounded-lg relative m-8">
//         <div className="absolute top-0 left-0 bg-[#002D62] w-36 h-36 flex items-start justify-start rounded-tl-lg rounded-br-full z-10" style={{borderRadius: '12px 0 100% 0'}}>
//           <div className="text-white font-bold ml-8 mt-8 text-lg">Cohort</div>
//           <div className="text-white font-bold text-5xl -ml-10 mt-16">6</div>
//         </div>
//         <div className="flex">
//           <div className="w-1/2">
//             <img
//               src={cohortImg}
//               className="mx-auto"
//               alt="Cohort Meeting"
//             />
//           </div>
//           <div className=" text-blue-800 px-5 pt-5 w-1/3">
//             <div className="text-lg font-bold mb-4">Cohort Details</div>
//             <ul className="list-none m-0 p-0">
//               <li className="flex flex-col p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4 border-transparent hover:border-green-400">
//                 <h5 className="text-lg">15 th Sept</h5>
//                 <span className="text-sm">Registration Close</span>
//               </li>
//               <li className="flex flex-col p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4 border-transparent hover:border-blue-400">
//                 <h5 className="text-lg">1 st Oct</h5>
//                 <span className="text-sm">Course certificate Upload</span>
//               </li>
//               <li className="flex flex-col p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4 border-transparent hover:border-yellow-400">
//                 <h5 className="text-lg">1st Nov</h5>
//                 <span className="text-sm">Internship Certificate Issue</span>
//               </li>
//               <li className="flex flex-col p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4 border-transparent hover:border-red-400">
//                 <h5 className="text-lg">15th Nov</h5>
//                 <span className="text-sm">Cohort Close</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex justify-center z-50">
//           <a
//             href="#"
//             className="btn bg-custom-blue text-white py-2 px-10 mt-2 rounded-full text-2xl hover:bg-blue-600"
//           >
//             Register Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CohortCard;
import cohortImg from "../assets/cohort-human.png";
import "./style/cohortAnimation.css"

const CohortCard = () => {
  return (
    <div className="mx-auto  bg-slate-50 py-10 px-5">
      <div className="p-3 bg-white rounded-lg relative lg:w-[1020px] container mx-auto">
        <div className="absolute top-0 left-0 bg-[#002D62] w-36 h-36 flex items-start justify-start rounded-tl-lg rounded-br-full z-10" style={{borderRadius: '12px 0 100% 0'}}>
          <div className="text-white font-bold ml-8 mt-8 text-lg">Cohort</div>
          <div className="text-white font-bold text-5xl -ml-10 mt-16">6</div>
        </div>
        {/* Adjust the flex direction on smaller screens */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[500px]  w-full">
            <img
              src={cohortImg}
              className="mx-auto"
              alt="Cohort Meeting"
            />
          </div>
          <div className="text-blue-800 coho px-5 pt-5 mx-auto md:w-1/3 w-[100%]">
            <div className="text-lg font-bold mb-4">Cohort Details</div>
            <ul className="list-none m-0 p-0">
              <li className="flex hover:text-white reg flex-col p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4  border-green-400">
                <h5 className="text-lg">15th Sept</h5>
                <span className="text-sm">Registration Close</span>
              </li>
              <li className="flex flex-col crs hover:text-white p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4  border-blue-400">
                <h5 className="text-lg">1st Oct</h5>
                <span className="text-sm">Course certificate Upload</span>
              </li>
              <li className="flex flex-col cer  hover:text-white p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4  border-purple-400">
                <h5 className="text-lg">1st Nov</h5>
                <span className="text-sm">Internship Certificate Issue</span>
              </li>
              <li className="flex flex-col coh hover:text-white p-4 mb-2 bg-white rounded-lg shadow transition-all duration-300 ease-in-out relative cursor-pointer overflow-hidden border-l-4  border-red-400">
                <h5 className="text-lg">15th Nov</h5>
                <span className="text-sm">Cohort Close</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <a
            href="#"
            className="btn bg-custom-blue text-white py-2 px-10 mt-4 rounded-full text-xl hover:bg-blue-600"
          >
            Register Now
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CohortCard;
