import React from "react";
import { Typography } from "@mui/material";

const Details = ({ detailsData }) => {
  return (
    <div className="details">
      <Typography variant="h6">Details</Typography>
      <Typography variant="body1">CEO: {detailsData.ceo}</Typography>
      <Typography variant="body1">
        Founded Year: {detailsData.foundedYear}
      </Typography>
      {/* Add more details as needed */}
    </div>
  );
};

export default Details;
