import React, { useContext } from "react";
import "../../Styles/Table/Table.css";
import { CountriesContext } from "../../Context/CountriesContext";
import numeral from "numeral";

const Table = () => {
  const [countriesTableData] = useContext(CountriesContext);

  return (
    <div className="table">
      <h3>Live Cases By Country</h3>
      {countriesTableData.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
