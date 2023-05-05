import React from "react";
import "./Button.css";

function Button({ handleSearchClick }) {
  return <button onClick={handleSearchClick}>Search</button>;
}

export default Button;
