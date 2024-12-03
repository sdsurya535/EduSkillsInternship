// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";

// import Footer from "./components/Footer";
// import DynamicFooter from "./components/DynamicFooter";

// // In your App.js or index.js
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import "./App.css";

// import HomePage from "./pages/HomePage";
// import OurJourney from "./pages/OurJourney";

// const App = () => {
//   const [hideHeader, setHideHeader] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setHideHeader(scrollTop > 100); // Change 100 to the scroll position where you want to hide the header
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <Header hidden={hideHeader} />
//       <Navbar />
//       {/* <HomePage /> */}
//       <OurJourney />
//       <Footer />
//       <DynamicFooter />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DynamicFooter from "./components/DynamicFooter";

// Import CSS for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

// Import your pages
import HomePage from "./pages/HomePage";
import OurJourney from "./pages/OurJourney";
import InternshipPage from "./pages/InternshipPage";
import InteractiveIndiaMap from "./components/InteractiveIndiaMap";
import PartnerInstitutions from "./components/InstitutionList";
import MoreImpactStories from "./components/MoreImapctStories";

const App = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHideHeader(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/our-journey",
      element: <OurJourney />,
    },
    {
      path: "/internship",
      element: <InternshipPage />,
    },
    {
      path: "/interactive",
      element: <InteractiveIndiaMap />,
    },
    {
      path: "/partner",
      element: <PartnerInstitutions />,
    },
    {
      path: "/moreimpact",
      element: <MoreImpactStories />,
    },
  ]);

  return (
    <div>
      {/* Header will always be visible */}
      <Header hidden={hideHeader} />
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
      <DynamicFooter />
    </div>
  );
};

export default App;

// cohort 7 event ??  dec 2023 cohort 7
// #march 2024 altir
// april 2024
