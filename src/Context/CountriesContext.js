import React, { createContext, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = (props) => {
  const [countriesTableData, setCountriesTableData] = useState([]);
  return (
    <CountriesContext.Provider
      value={[countriesTableData, setCountriesTableData]}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
