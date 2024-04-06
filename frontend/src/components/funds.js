import React from "react";
import { Typography } from "@mui/material";

const FundsInvested = ({ fundsData }) => {
  return (
    <div className="funds-invested" style={{ textAlign: "center" }}>
      <Typography variant="h6">Funds Invested</Typography>
      {fundsData.map((fund, index) => (
        <div key={index}>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {fund.name}
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Invested AUM Percent: {fund.investedAumPercent}
          </Typography>
          {/* Add more fund details as needed */}
        </div>
      ))}
    </div>
  );
};

export default FundsInvested;
