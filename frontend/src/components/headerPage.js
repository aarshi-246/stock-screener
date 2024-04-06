import React from "react";
import { Typography } from "@mui/material";

const Header = ({ headerData }) => {
  return (
    <div className="header">
      <img src={headerData.logoUrl} alt={headerData.displayName} />
      <Typography variant="h4">{headerData.displayName}</Typography>
      <Typography variant="body1">{headerData.businessSummary}</Typography>
      <a href={headerData.websiteUrl}>Visit Website</a>
    </div>
  );
};

export default Header;
