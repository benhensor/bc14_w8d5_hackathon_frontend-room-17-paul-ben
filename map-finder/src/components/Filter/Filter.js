import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filterDropdown">
      <label id="filter">Filter</label>
      <select id="filter" name="dropdown"></select>
    </div>
  );
}

export default Filter;
