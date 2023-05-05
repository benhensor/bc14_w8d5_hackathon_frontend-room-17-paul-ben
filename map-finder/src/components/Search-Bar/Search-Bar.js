import React from "react";
import Button from "../Button/Button";
import "./Search-Bar.css";

function Searchbar({ setCountry, handleSearchChange, handleSearchClick }) {
  return (
    <div className="searchBar">
      <input placeholder="Search" onChange={handleSearchChange}></input>
      <Button handleSearchClick={handleSearchClick}/>
    </div>
  );
}

export default Searchbar;
