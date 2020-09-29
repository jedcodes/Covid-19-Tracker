import React from "react";
import "./App.css";
import { Header, InfoBoxes, Table, LineGraph } from "./Components";
import SelectContextProvider from "./Context/SelectedContext";
import CountriesProvider from "./Context/CountriesContext";
import CasesProvider from "./Context/CasesContext";
import { Card, CardContent } from "@material-ui/core";

const App = () => {
  return (
    <div className="app">
      <SelectContextProvider>
        <CountriesProvider>
          <div className="app__left">
            <CasesProvider>
              <Header />
              <InfoBoxes />
              <LineGraph />
            </CasesProvider>
          </div>
          <Card className="app__right">
            <CardContent>
              <Table />
            </CardContent>
          </Card>
        </CountriesProvider>
      </SelectContextProvider>
    </div>
  );
};

export default App;
