import React from 'react'
import './Card.css';
import canadaFlag from '../../assets/flag-canada.webp';

const Card = () => {
  return (
    <div className="card-container">
    <div className="country-flag-container">
      <img className="country-flag" src={canadaFlag} alt="" />
    </div>
      <div className="country-details-container">
        {/* <img className="country-arms" src="../logo.svg" alt="" /> */}
        <h3 className="country-title">Canada</h3>
        <div className="country-details">
          <p>Population:{}</p>
          <p>Region:{}</p>
          <p>Capital:{}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;