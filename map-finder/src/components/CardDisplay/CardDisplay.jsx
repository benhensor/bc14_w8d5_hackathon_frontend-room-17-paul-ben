import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";


const CardDisplay = ({ countryData }) => {
  
  
  return (
    <section className="card-display-container">
    {countryData.map((country) => (
      <Card key={country.name} country={country}/>
    ))}
    </section>
  );
};

export default CardDisplay;
