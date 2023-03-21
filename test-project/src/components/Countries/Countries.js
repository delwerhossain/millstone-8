import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grp">
      {countries.map(country => <Country name={country.name.common} population={country.population} ></Country>)}
    </div>
  );
};

export default Countries;
