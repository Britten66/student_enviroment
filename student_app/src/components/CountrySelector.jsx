// importing a state hook here that lets us update and store data

import { useState, useEffect } from "react";

// State variable:
// React remembers this value between renders.
// Changing it with the setter (setSomething) automatically updates the UI.
export default function CountrySelector() {
  const [countries, setCountries] = useState([]);

  // I forgot to put this line of code because it stores all countries from the API
  // so we can filter them later. This is called a state variable.

  const [allCountries, setAllCountries] = useState([]);

  const fetchCountries = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital"
    );
    const data = await response.json();

    // setting the data for each site variable
    // this will save data and be ready to filter

    setAllCountries(data);
  };

  const filterByletter = (letter) => {
    const filtered = allCountries.filter((country) => {
      return country.name.official.startsWith(letter);
    });

    setCountries(filtered);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="space-y-2">
      <h1>Filtering Through Countries</h1>
      <div className="flex gap-2">
        <button
          className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => filterByletter("I")}
        >
          STARTING WITH I
        </button>
        <button
          className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
          onClick={() => filterByletter("C")}
        >
          STARTING WITH C
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto border rounded p-2">
        <div className="grid grid-cols-4 gap-2">
          {countries.map((country) => (
            <div key={country.name.official}>
              <img src={country.flags.png} alt="flag" width="100" />
              <h3>{country.name.official}</h3>
              <p>Capital: {country.capital?.[0] || "N/A"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
