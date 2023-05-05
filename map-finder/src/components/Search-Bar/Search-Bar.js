import React from "react";
import Button from "../Button/Button";
import "./Search-Bar.css";

function Searchbar({ showCard, handleSearchChange, handleSearchClick }) {
  return (
    <div className="searchBar">
      <input placeholder="Search" onChange={handleSearchChange}></input>
      <Button handleSearchClick={handleSearchClick} showCard={showCard} />
    </div>
  );
}

export default Searchbar;
