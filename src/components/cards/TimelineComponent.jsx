// TimelineComponent.js

import React from "react";
import "./TimelineComponent.css"

const TimelineComponent = () => {
  return (
    <div id="example">
      <ul className="list">
        <li className="personal">
          <span className="title">
            <h5>15th Sept</h5>
          </span>
          <span className="subtitle">Registration Close</span>
        </li>
        <li className="work">
          <span className="title">
            <h5>1st Oct</h5>
          </span>
          <span className="subtitle">Course certificate Upload</span>
        </li>
        <li className="shopping">
          <span className="title">
            <h5>1st Nov</h5>
          </span>
          <span className="subtitle">Internship Certificate Issue</span>
        </li>
        <li className="cohort">
          <span className="title">
            <h5>15th Nov</h5>
          </span>
          <span className="subtitle">Cohort Close</span>
        </li>
      </ul>
    </div>
  );
};

export default TimelineComponent;
