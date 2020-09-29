import React, { createContext, useState } from "react";

export const CasesContext = createContext();

const CasesProvider = (props) => {
  const [casesType, setCasesType] = useState("cases");
  return (
    <CasesContext.Provider value={[casesType, setCasesType]}>
      {props.children}
    </CasesContext.Provider>
  );
};

export default CasesProvider;
