import React from "react";
import Header from "../components/headerPage";
import Details from "../components/detailsPage";
import BrandLogos from "../components/brandLogo";
import Statistics from "../components/stats";
import FundamentalsTable from "../components/findamentals";
import ShareholdingPatternGraph from "../components/shareHold";
import FundsInvested from "../components/funds";
import PriceData from "../components/priceData";
import FinancialStatements from "../components/finStat";
import { companyData } from "./apiResp";

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
    financialStatement,
    // expertRating,
    // similarAssets,
  } = companyData;

  return (
    <div className="company-page">
      {/* Header component */}
      <Header headerData={header} />

      {/* Details component */}
      <Details detailsData={details} />

      {/* Brand logos component */}
      <BrandLogos brandLogos={brandDtos} />

      {/* Statistics component */}
      <Statistics statsData={stats} />

      {/* Fundamentals table component */}
      <FundamentalsTable fundamentals={fundamentals} />

      {/* Shareholding pattern graph component */}
      <ShareholdingPatternGraph shareHoldingData={shareHoldingPattern} />

      {/* Funds invested component */}
      <FundsInvested fundsData={fundsInvested} />

      {/* Price data component */}
      <PriceData priceData={priceData} />

      {/* Financial statement tables component */}
      {/* <FinancialStatements financialData={financialStatement} /> */}

      {/* Expert rating component */}
      {/* <ExpertRating expertRating={expertRating} /> */}

      {/* Similar assets component */}
      {/* <SimilarAssets similarAssets={similarAssets} /> */}
    </div>
  );
};

export default CompanyPage;
