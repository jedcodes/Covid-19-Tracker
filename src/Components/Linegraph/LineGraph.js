import React, { useState, useEffect, useContext } from "react";
import "../../Styles/LineGraph/LineGraph.css";
import { Line } from "react-chartjs-2";
import axios from "axios";
import numeral from "numeral";
import { CasesContext } from "../../Context/CasesContext";

const dataUrl = "https://disease.sh/v3/covid-19/historical/all?lastdays=120";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const LineGraph = () => {
  const [data, setData] = useState([]);
  const [casesType] = useContext(CasesContext);

  const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(dataUrl);

      const chartData = buildChartData(data, casesType);
      setData(chartData);
    };
    fetchData();
  }, [casesType]);

  return (
    <div className="lineGraph">
      <h2>Worldwide New Cases</h2>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
};

export default LineGraph;
