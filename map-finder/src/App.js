import React, { useState, useEffect } from "react";
import "./App.css";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import NavBar from "./components/NavBar/Navbar";
import CardDisplay from "./components/CardDisplay/CardDisplay";




function App() {

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    async function fetchCountriesData() {
      try {
        const response = await fetch('http://api.countrylayer.com/v2/all?access_key=a51ee900e070d72bdd511cdc70f42771');
        const data = await response.json();
        const formattedData = data.map((country) => {
          return {
            name: country.name,
            capital: country.capital,
            region: country.region,
            subregion: country.subregion,
            currency: country.currency,
            flag: country.flag,
          };
        });
        setCountryData(formattedData);
      } catch (error) {
      console.error(error);
      }
    }
      fetchCountriesData();
    }, []);


  return (
    <div className="App">
    <header>
      <NavBar />
    </header>
    
    
      
      <SearchContainer />
      {/* <CardDisplay countryData={countryData}/> */}
    </div>
  );
}

export default App;
