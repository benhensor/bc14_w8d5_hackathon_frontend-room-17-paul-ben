import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

const CardDisplay = ({ showCard, content }) => {
  return (
    <section className="card-display-container">
      {showCard && <Card content={content} />}
    </section>
  );
};

export default CardDisplay;
