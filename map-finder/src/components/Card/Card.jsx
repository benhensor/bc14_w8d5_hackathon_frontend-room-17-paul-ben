import React from "react";
import "./Card.css";
import canadaFlag from "../../assets/flag-canada.webp";

const Card = ({ content }) => {
  
  return (
    <div key={content} className="card-container">
      <div className="country-flag-container">
        <img className="country-flag" src={content ? content[0].flags.svg : ''} alt="" />
      </div>
      <div className="country-details-container">
        {/* <img className="country-arms" src="../logo.svg" alt="" /> */}
        {content ? (
        <h3 className="country-title">{content[0].name.common}</h3>
        ) : (
          <p>Loading...</p>
        )}
        {content ? (
          <div className="country-details">
          <p>Population:{content[0].population}</p>
          <p>Region:{content[0].region}</p>
          <p>Capital:{content[0].capital}</p>
        </div>
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
    </div>
  );
};

export default Card;
