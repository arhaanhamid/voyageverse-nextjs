import React, { useState, useEffect } from 'react';
import styles from './countryselector.module.css'
import axios from 'axios';

const CountrySelector= () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common).slice(0, 50);
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = countries.filter(country => country.toLowerCase().includes(value.toLowerCase()));
    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setQuery(country);
    setFilteredCountries([]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for a country"
      />
      {filteredCountries.length > 0 && (
        <ul className={styles.ul}>
          {filteredCountries.map((country, index) => (
            <li className={styles.li} key={index} onClick={() => handleSelectCountry(country)}>
              {country}
            </li>
          ))}
        </ul>
      )}
      {selectedCountry && (
        <div>
          <h2>Selected Country:</h2>
          <p>{selectedCountry}</p>
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
