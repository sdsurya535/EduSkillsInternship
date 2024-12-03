import React from 'react';
import './ULBannerCards.css'; // Import your CSS file

const ULBannerCards = () => {
  return (
    <div className="container bg-slate-50 w-[100%] overflow-x-hidden">
      <h1>UL Banner Cards</h1>
      <ul className="banner-cards">
        <li style={{ "--accent-color": "#0B374D" }}>
          <div className="icon"><i className="fab fa-codepen"></i></div>
          <div className="title">Codepen</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
        </li>
        <li style={{ "--accent-color": "#1286A8" }}>
          <div className="icon"><i className="fab fa-html5"></i></div>
          <div className="title">HTML 5</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
        <li style={{ "--accent-color": "#D2B53B" }}>
          <div className="icon"><i className="fab fa-css3"></i></div>
          <div className="title">CSS 3</div>
          <div className="descr">Lorem ipsum dolor sit.</div>
        </li>
        <li style={{ "--accent-color": "#DA611E" }}>
          <div className="icon"><i className="fab fa-js"></i></div>
          <div className="title">Javascript</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
        </li>
        <li style={{ "--accent-color": "#AC2A1A" }}>
          <div className="icon"><i className="fab fa-github"></i></div>
          <div className="title">Github</div>
          <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </li>
      </ul>
    </div>
  );
}

export default ULBannerCards;
