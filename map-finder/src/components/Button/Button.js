import React from "react";
import "./Button.css";

function Button({ setCountry, handleSearchClick }) {
  return <button onClick={handleSearchClick}>Search</button>;
}

export default Button;
