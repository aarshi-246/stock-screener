import React from "react";
import { Typography } from "@mui/material";

const BrandLogos = ({ brandLogos }) => {
  return (
    <div className="brand-logos">
      <Typography variant="h6">Brand Logos</Typography>
      {brandLogos.map((brand, index) => (
        <img key={index} src={brand.logoUrl} alt={brand.name} />
      ))}
    </div>
  );
};

export default BrandLogos;
