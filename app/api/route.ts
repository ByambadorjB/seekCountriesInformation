

async function fetchCountryNames() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      
      // Map through the data to extract the common name
      const countryNames = data.map((country: { name: { common: string } }) => country.name.common);
      
      console.log(countryNames);
    } catch (error) {
      console.error("Error fetching country names:", error);
    }
  }
  
  fetchCountryNames();

  