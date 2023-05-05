import React from "react";
import Searchbar from "../Search-Bar/Search-Bar";
import Filter from "../Filter/Filter";
import "./SearchContainer.css";

function SearchContainer({ setCountry, handleSearchChange, handleSearchClick }) {
  return (
    <div className="searchContainer">
      <Searchbar 
        setCountry={setCountry}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />
      <Filter />
    </div>
  );
}

export default SearchContainer;
