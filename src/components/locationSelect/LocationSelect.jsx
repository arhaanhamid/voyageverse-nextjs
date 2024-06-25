"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationSelect = ({ location, setLocation }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
        const countryNames = response.data.data.map((country) => country.name); // Adjusted to match response structure
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  const handleSelectCountry = (country) => {
    setLocation(country);
    setFilteredCountries([]);
  };

  return (
    <div className="relative" id="select-container">
      <input
        type="text"
        value={location}
        onChange={handleInputChange}
        placeholder="Search for a country"
        className="bg-transparent w-full px-4 py-2 border border-[#414141] rounded-md focus:outline-none focus:ring-1 focus:ring-[#e81cff] text-white "
      />

      <ul
        id="countrySelector"
        className={`${
          location.length > 0 ? "" : "hidden"
        } absolute left-0 right-0 mt-2 bg-white border border-[#414141] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto`}
      >
        {filteredCountries &&
          filteredCountries.map((country, index) => (
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
              key={index}
              onClick={() => handleSelectCountry(country)}
            >
              {country}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LocationSelect;
