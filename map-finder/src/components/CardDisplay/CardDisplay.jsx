import React from "react";
import Card from "../Card/Card";
import "./CardDisplay.css";

const CardDisplay = ({ content }) => {
  return (
    <section className="card-display-container">
      <Card content={content} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default CardDisplay;
