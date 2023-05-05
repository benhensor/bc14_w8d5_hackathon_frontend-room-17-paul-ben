import React from "react";
import Button from "../Button/Button";
import "./Search-Bar.css";

function Searchbar({ setCountry, handleSearchChange }) {
  return (
    <div className="searchBar">
      <input placeholder="Search"></input>
      <Button setCountry={setCountry}/>
    </div>
  );
}

export default Searchbar;
