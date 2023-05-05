import React, { useState, useEffect } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import NavBar from "./components/NavBar/Navbar";
import CardDisplay from "./components/CardDisplay/CardDisplay";

function App() {
  const [content, setContent] = useState([]);

  async function getApiData(country) {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
  }

  useEffect(() => {
    async function fetchData() {
      const countries = [];
      for (let i = 0; i < 8; i++) {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomCountry = data[randomIndex];
        const countryData = await getApiData(randomCountry.name.common);
        countries.push(countryData);
      }
      setContent(countries);
    }
    fetchData();
  }, []);

  // handleChange function for search input

  function handleSearchChange(e) {
    const searchInput = e.currentTarget.value;
    //console.log(searchInput);
  }

  // handleClick function for search button
  async function handleSearchClick() {
    console.log("clicked");
  }

  return (
    <div className="App">
      <NavBar />
      <SearchContainer
        handleSearchChange={handleSearchChange}
        handleSearchClick={handleSearchClick}
      />
      <CardDisplay content={content} />
    </div>
  );
}

export default App;
