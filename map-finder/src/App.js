// #### Things to include in your project today
// -   Create a component tree diagram
//     -   Should show what components have state (if any) & props (if any).
// -   Fetching from API & Filter the data.
// -   Recreate the design given and maybe make it better (if time permits).
// -   Some tests

// #### Bonus tasks
// -   Explore localstorage to keep data persisting.
// -   Make it responsive.
// -   Include dark/light mode.
// -   Explore accessibility.

// Use API to retrieve data on countries
// Data to include:
// - Name
// - Population
// - region
// - capital city
// - coat of arms

// make a landing page searchable by a variety of categories
// populate the page with 'card' components to display country specific information
// include links to maps
// results to be sortable by a range of criteria such as population etc.

import React, { useState, useEffect } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import NavBar from "./components/NavBar/Navbar";
import CardDisplay from "./components/CardDisplay/CardDisplay";

function App() {
  const [country, setCountry] = useState(null);
  const [content, setContent] = useState("");

  const url = `https://restcountries.com/v3.1/name/${country}`;

  async function getApiData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    if (country) {
      getApiData();
    }
  }, [country]);

  // handleChange function for search input

  function handleSearchChange(e) {
    const searchInput = e.currentTarget.value;
    setCountry(searchInput);
    //console.log(searchInput);
  }

  // handleClick function for search button
  async function handleSearchClick() {
    await getApiData();
    console.log("clicked");
  }

  return (
    <div className="App">
      <NavBar />
      <SearchContainer
        setCountry={setCountry}
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />
      <CardDisplay content={content} />
    </div>
  );
}

export default App;
