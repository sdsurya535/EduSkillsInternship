// import { Icon } from "@iconify/react";
// import React from "react";

// const Process = () => {
//   return (
//     <section className="mx-auto px-4 py-8 bg-slate-100">
//       <div className="cPanelContainer max-w-7xl mx-auto rounded-lg p-6">
//         {/* Header */}
//         <div className="cPanelHeader text-center bg-blue-800 text-white py-4 rounded-t-lg">
//           <h2>FOLLOW THE PROCESS TO COMPLETE THE INTERNSHIP</h2>
//         </div>

//         {/* Content */}
//         <div className="cPanelContent text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4 bg-white rounded-br-lg rounded-bl-lg">
//           {/* Section 01 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 01</h5>
//               <p>Apply for virtual internship portal from EduSkills portal.</p>
//             </div>
//             <div className="text-xl font-bold text-blue-500 px-4">
//               <Icon icon="line-md:arrow-right-circle" height={34} />
//             </div>
//           </div>

//           {/* Section 02 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 02</h5>
//               <p>
//                 Receive registration confirmation mail with platform
//                 credentials.
//               </p>
//             </div>
//             <div className="text-xl font-bold text-blue-500 px-4">
//               <Icon icon="line-md:arrow-right-circle" height={34} />
//             </div>
//           </div>

//           {/* Section 03 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 03</h5>
//               <p>Login to platform and start accessing courses and learning.</p>
//             </div>
//             <div className="text-xl font-bold text-blue-500 px-4">
//               <Icon icon="line-md:arrow-right-circle" height={34} />
//             </div>
//           </div>

//           {/* Section 04 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 04</h5>
//               <p>Upload your course completion certificate.</p>
//             </div>
//             <div className="text-xl font-bold text-blue-500 px-4">
//               <Icon icon="line-md:arrow-right-circle" height={34} />
//             </div>
//           </div>

//           {/* Section 05 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 05</h5>
//               <p>Get your virtual internship completion certificate.</p>
//             </div>
//             <div className="text-xl font-bold text-blue-500 px-4">
//               <Icon icon="line-md:arrow-right-circle" height={34} />
//             </div>
//           </div>

//           {/* Section 06 */}
//           <div className="cPanelSection flex items-center">
//             <div className="flex-1">
//               <h5 className="font-bold">Step 06</h5>
//               <p>Access to career fair and placement opportunities.</p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center p-4">
//           <span></span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;
import React from "react";
import mobileImageUrl from "../assets/InternProcessS.png";
import desktopImageUrl from "../assets/InternProcessL.png";

const Process = () => {
  return (
    <section className="mx-auto px-4 py-8 bg-white max-w-7xl">
      <div className="cPanelHeader text-center bg-blue-800 text-white py-4 rounded-t-lg">
        <h2>FOLLOW THE PROCESS TO COMPLETE THE INTERNSHIP</h2>
      </div>
      <div>
        <img 
          srcSet={`${mobileImageUrl} 639w, ${desktopImageUrl} 640w`}
          sizes="(max-width: 639px) 100vw, 640px"
          src={desktopImageUrl} // This is used as a fallback if srcSet is not supported
          alt="Process to complete the internship"
        />
      </div>
    </section>
  );
};

export default Process;


