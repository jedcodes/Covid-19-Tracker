import React, { useState, useEffect, useContext } from "react";
import "../../Styles/Header/Header.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import { SelectContext } from "../../Context/SelectedContext";
import { CountriesContext } from "../../Context/CountriesContext";
import { sortData } from "../../utils/utils";

const countriesUrl = "https://disease.sh/v3/covid-19/countries";
const globalUrl = "https://disease.sh/v3/covid-19/all";

const Header = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [, setSelectCountryData] = useContext(SelectContext);
  const [, setCountriesTableData] = useContext(CountriesContext);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(globalUrl);

      setSelectCountryData(data);
    };

    fetchData();
  }, [setSelectCountryData]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(countriesUrl);

      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));

      setCountries(countries);
      const sortedData = sortData(data);
      setCountriesTableData(sortedData);
    };
    fetchData();
  }, [setCountriesTableData]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? globalUrl
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    const { data } = await axios.get(url);
    setCountry(countryCode);
    setSelectCountryData(data);
  };

  return (
    <div className="header">
      <img
        src="https://raw.githubusercontent.com/adrianhajdin/project_corona_tracker/master/src/images/image.png"
        alt=""
      />
      <FormControl className="app__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
