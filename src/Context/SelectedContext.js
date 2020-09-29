import React, { createContext, useState } from "react";

export const SelectContext = createContext();

const SelectContextProvider = (props) => {
  const [selectCountryData, setSelectCountryData] = useState([]);
  return (
    <SelectContext.Provider value={[selectCountryData, setSelectCountryData]}>
      {props.children}
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
