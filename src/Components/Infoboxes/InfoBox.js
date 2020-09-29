import React from "react";
import "../../Styles/InfoBoxes/InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import numeral from "numeral";

const InfoBox = ({ title, cases, total, subTitle, ...props }) => {
  console.log(cases);
  return (
    <Card className="infoBox" onClick={props.onClick}>
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">
          {cases ? (
            <CountUp start={0} end={cases} duration={2.75} separator="," />
          ) : (
            0
          )}
        </h2>
        <Typography className="infoBox__total">
          {numeral(total).format("0,0")} Total
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
