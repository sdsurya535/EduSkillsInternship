import React from 'react';
import './dynamicCard.css'; // Import your CSS file

const Card = ({ title, imageUrl, body,size }) => {
  return (
    <div className="card cardnew bg-white mx-4 my-6">
      <div className="card-details">
        <center>
          <p className="text-title"><img src={imageUrl} alt={title} width={size} /></p><br />
          <p className="text-body">{body}</p>
        </center>
      </div>
      <button className="card-button">Enroll Now</button>
    </div>
  );
}

export default Card;
