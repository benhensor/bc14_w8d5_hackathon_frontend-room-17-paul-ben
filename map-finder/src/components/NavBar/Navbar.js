import React from "react";
import Filter from "../Filter/Filter";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>Where in the World?</h1>
      <DarkMode />
    </nav>
  );
}

export default Navbar;
