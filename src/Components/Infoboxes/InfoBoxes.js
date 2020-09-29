import React, { useContext } from "react";
import "../../Styles/InfoBoxes/InfoBoxes.css";
import { SelectContext } from "../../Context/SelectedContext";
import InfoBox from "./InfoBox";
import { CasesContext } from "../../Context/CasesContext";

const InfoBoxes = () => {
  const [selectCountryData] = useContext(SelectContext);
  const [, setCasesType] = useContext(CasesContext);

  return (
    <div className="infoBoxes">
      <InfoBox
        onClick={(e) => setCasesType("cases")}
        className="infoBoxes__infected"
        title="Infected"
        cases={selectCountryData.todayCases}
        total={selectCountryData.cases}
        subTitle="Number of active cases from COVID-19."
      />
      <InfoBox
        onClick={(e) => setCasesType("recovered")}
        className="infoBoxes__recovered"
        title="Recovered"
        cases={selectCountryData.todayRecovered}
        total={selectCountryData.recovered}
        subTitle="Number of recoveries from COVID-19."
      />
      <InfoBox
        onClick={(e) => setCasesType("deaths")}
        className="infoBoxes__deaths"
        title="Deaths"
        cases={selectCountryData.todayDeaths}
        total={selectCountryData.deaths}
        subTitle="Number of deaths caused by COVID-19."
      />
    </div>
  );
};

export default InfoBoxes;
