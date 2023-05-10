const [country, setCountry] = useState(null);
const [content, setContent] = useState("");
const [showCard, setShowCard] = useState(false);
const [randomCountry, setRandomCountry] = useState([]);

const url = `https://restcountries.com/v3.1/name/${country}`;


async function getApiData(country) {
  const url = `https://restcountries.com/v3.1/name/${country}`;
  const response = await fetch(url);
  const data = await response.json();
  setContent(data);
  console.log(data);
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
    setRandomCountry(countries);
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

  await getApiData();
  setShowCard(true);

  console.log("clicked");
}
