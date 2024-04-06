import React from "react";
import { Typography, Grid } from "@mui/material";

const Header = ({ headerData }) => {
  return (
    <Grid container alignSelf={"center"}>
      <img src={headerData.logoUrl} alt={headerData.displayName} />
      <Typography variant="h4">{headerData.displayName}</Typography>
      {/* <Typography variant="body1">{headerData.businessSummary}</Typography> */}
      {/* <a href={headerData.websiteUrl}>Visit Website</a> */}
    </Grid>
  );
};

export default Header;
