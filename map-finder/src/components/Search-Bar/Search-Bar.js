import React from "react";
import Button from "../Button/Button";
import "./Search-Bar.css";

function Searchbar() {
  return (
    <div className="searchBar">
      <input placeholder="Search"></input>
      <Button />
    </div>
  );
}

export default Searchbar;
