import React from "react";
import "./Card.css";

const Card = ({ country }) => {
  
  return (
    <div className="card-container">
      <div className="country-flag-container">
        <img className="country-flag" src={country ? country.flag : ''} alt="" />
      </div>
      <div className="country-details-container">
        {/* <img className="country-arms" src="../logo.svg" alt="" /> */}
        {country ? (
        <h3 className="country-title">{country.name}</h3>
        ) : (
          <p>Loading...</p>
        )}
        {country ? (
          <div className="country-details">
          <p>Population:{country.population}</p>
          <p>Region:{country.region}</p>
          <p>Capital:{country.capital}</p>
          <p>Currency:{country.currency}</p>
        </div>
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
    </div>
  );
};

export default Card;
