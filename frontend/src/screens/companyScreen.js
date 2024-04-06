import React from "react";
import Header from "../components/headerPage";
import Details from "../components/detailsPage";
import BrandLogos from "../components/brandLogo";
import Statistics from "../components/stats";
import FundamentalsTable from "../components/findamentals";
import ShareholdingPatternGraph from "../components/shareHold";
import FundsInvested from "../components/funds";
import PriceData from "../components/priceData";
// import FinancialStatements from "../components/finStat";
import { companyData } from "./apiResp";
import { Grid } from "@mui/material";

// Import necessary components

const CompanyPage = () => {
  const {
    header,
    details,
    brandDtos,
    stats,
    fundamentals,
    shareHoldingPattern,
    fundsInvested,
    priceData,
    // financialStatement,
    // expertRating,
    // similarAssets,
  } = companyData;

  return (
    <div style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}>
      <Grid container>
        {/* Header component */}
        <Grid item xs={12} md={6}>
          <Header headerData={header} />
        </Grid>

        {/* Details component */}
        <Grid item xs={12} md={6}>
          <Details detailsData={details} />
        </Grid>

        {/* Brand logos component */}
        {/* <Grid item xs={12} md={6}>
      <BrandLogos brandLogos={brandDtos} />
      </Grid> */}

        {/* Statistics component */}
        <Grid item xs={12} md={6}>
          <Statistics statsData={stats} />
        </Grid>

        {/* Fundamentals table component */}
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FundamentalsTable fundamentals={fundamentals} />
        </Grid>

        {/* Shareholding pattern graph component */}
        {/* <Grid item xs={12} md={6}>
        <ShareholdingPatternGraph shareHoldingData={shareHoldingPattern} />
      </Grid> */}

        {/* Funds invested component */}
        <Grid
          item
          xs={12}
          md={12}
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <FundsInvested fundsData={fundsInvested} />
        </Grid>

        {/* Price data component */}
        <Grid
          item
          xs={12}
          md={12}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <PriceData priceData={priceData} />
        </Grid>

        {/* Financial statement tables component */}
        {/* <FinancialStatements financialData={financialStatement} /> */}

        {/* Expert rating component */}
        {/* <ExpertRating expertRating={expertRating} /> */}

        {/* Similar assets component */}
        {/* <SimilarAssets similarAssets={similarAssets} /> */}
      </Grid>
    </div>
  );
};

export default CompanyPage;
