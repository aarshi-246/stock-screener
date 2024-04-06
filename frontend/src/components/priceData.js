import React from "react";
import { Typography } from "@mui/material";

const PriceData = ({ priceData }) => {
  return (
    <div style={{ alignContent: "center" }}>
      <Typography variant="h6">Price Data</Typography>
      <Typography variant="body1">
        NSE Year Low: {priceData.nse.yearLowPrice}
      </Typography>
      <Typography variant="body1">
        NSE Year High: {priceData.nse.yearHighPrice}
      </Typography>
      <Typography variant="body1">
        BSE Year Low: {priceData.bse.yearLowPrice}
      </Typography>
      <Typography variant="body1">
        BSE Year High: {priceData.bse.yearHighPrice}
      </Typography>
    </div>
  );
};

export default PriceData;
