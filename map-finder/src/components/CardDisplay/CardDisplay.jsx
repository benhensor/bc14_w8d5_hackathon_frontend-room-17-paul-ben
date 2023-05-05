import React from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

const CardDisplay = ({ content }) => {
  const randomCountries = content ? getRandomCountries(content, 8) : [];
  
  function getRandomCountries(countries, count) {
    const shuffled = countries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <section className="card-display-container">
      {randomCountries.map(country => (
        <Card key={country.name.common} content={[country]} />
      ))}
    </section>
  );
};

export default CardDisplay;
