import React from "react";
import Searchbar from "../Search-Bar/Search-Bar";
import Filter from "../Filter/Filter";
import "./SearchContainer.css";

function SearchContainer() {
  return (
    <div className="searchContainer">
      <Searchbar />
      <Filter />
    </div>
  );
}

export default SearchContainer;
