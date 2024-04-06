import React from "react";
import { Typography } from "@mui/material";

const Statistics = ({ statsData }) => {
  return (
    <div className="statistics">
      <Typography variant="h6">Statistics</Typography>
      <Typography variant="body1">Market Cap: {statsData.marketCap}</Typography>
      <Typography variant="body1">P/E Ratio: {statsData.peRatio}</Typography>
      {/* Add more statistics as needed */}
    </div>
  );
};

export default Statistics;
