import React, { useEffect, useState } from "react";
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
    <div>
      <h1 className="heading">{countries.map(country => <h1>{country.name.common}</h1>)}</h1>
    </div>
  );
};

export default Countries;
