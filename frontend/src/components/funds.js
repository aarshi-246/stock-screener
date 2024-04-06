import React from "react";
import { Typography } from "@mui/material";

const FundsInvested = ({ fundsData }) => {
  return (
    <div className="funds-invested">
      <Typography variant="h6">Funds Invested</Typography>
      {fundsData.map((fund, index) => (
        <div key={index}>
          <Typography variant="body1">{fund.name}</Typography>
          <Typography variant="body1">
            Invested AUM Percent: {fund.investedAumPercent}
          </Typography>
          {/* Add more fund details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FundsInvested;
