import React, { useState, useEffect } from "react";
import axios from "axios";
import StockScreenerTable from "../components/screenerTable";
import StockFilter from "../components/FilterComponent";
import { Grid, Typography } from "@mui/material";
import { getAllStocksApi } from "../api";

let dummyData = [
  {
    displayName: "MDFC Bank",
    price: 1177065.34,
    marketCap: 1177065.34,
    divYield: 0.9,
    npQuarter: 115015.51,
    yoyQtrPrft: 115015.51,
    salesQtr: 115015.51,
    yoyQtrSales: 115015.51,
    sectorRoe: 14.315278023886657,
    sectorRoce: 5.508082532503328,
    nseScriptCode: "MDFCBANK",
    stats: {
      marketCap: 1177065.34,
      pbRatio: 2.69,
      peRatio: 19.94,
      bookValue: 575.6588705,
      epsTtm: 77.71,
      roe: 13.49897978269006,
      industryPe: 14.540778488104875,
      cappedType: "Large Cap",
      dividendYieldInPercent: 0.9,
      faceValue: 1,
      returnOnAssets: 0.0,
      operatingProfitMargin: 82.872522354787,
      netProfitMargin: 23.448224774217888,
      evToSales: 0.0,
      evToEbitda: 20.05,
      earningsYield: 0.9006662280957147,
      sectorPb: 2.1522622613997844,
      sectorDivYield: 0.8524867847787806,
      priceToOcf: -25.812343931157454,
      priceToFcf: 9.43,
      roic: 0.0,
      pePremiumVsSector: 0.37131584916942195,
      pbPremiumVsSector: 0.24984768271246027,
      divYieldVsSector: 0.04751321522121943,
      sectorPe: 14.540778488104875,
      priceToSales: 3.41,
      pegRatio: 0.9659698058950398,
    },
  },
  {
    displayName: "HDFC Bank",
    price: 1177065.34,
    marketCap: 1177065.34,
    divYield: 0.9,
    npQuarter: 115015.51,
    yoyQtrPrft: 115015.51,
    salesQtr: 115015.51,
    yoyQtrSales: 115015.51,
    sectorRoe: 14.315278023886657,
    sectorRoce: 5.508082532503328,
    nseScriptCode: "HDFCBANK",
    stats: {
      marketCap: 1177065.34,
      pbRatio: 2.69,
      peRatio: 19.94,
      bookValue: 575.6588705,
      epsTtm: 77.71,
      roe: 13.49897978269006,
      industryPe: 14.540778488104875,
      cappedType: "Large Cap",
      dividendYieldInPercent: 0.9,
      faceValue: 1,
      returnOnAssets: 0.0,
      operatingProfitMargin: 82.872522354787,
      netProfitMargin: 23.448224774217888,
      evToSales: 0.0,
      evToEbitda: 20.05,
      earningsYield: 0.9006662280957147,
      sectorPb: 2.1522622613997844,
      sectorDivYield: 0.8524867847787806,
      priceToOcf: -25.812343931157454,
      priceToFcf: 9.43,
      roic: 0.0,
      pePremiumVsSector: 0.37131584916942195,
      pbPremiumVsSector: 0.24984768271246027,
      divYieldVsSector: 0.04751321522121943,
      sectorPe: 14.540778488104875,
      priceToSales: 3.41,
      pegRatio: 0.9659698058950398,
    },
  },
  {
    displayName: "HDFC Bank",
    price: 1177065.34,
    marketCap: 1177065.34,
    divYield: 0.9,
    npQuarter: 115015.51,
    yoyQtrPrft: 115015.51,
    salesQtr: 115015.51,
    yoyQtrSales: 115015.51,
    sectorRoe: 14.315278023886657,
    sectorRoce: 5.508082532503328,
    nseScriptCode: "HDFCBANK",
    stats: {
      marketCap: 1177065.34,
      pbRatio: 2.69,
      peRatio: 19.94,
      bookValue: 575.6588705,
      epsTtm: 77.71,
      roe: 13.49897978269006,
      industryPe: 14.540778488104875,
      cappedType: "Large Cap",
      dividendYieldInPercent: 0.9,
      faceValue: 1,
      returnOnAssets: 0.0,
      operatingProfitMargin: 82.872522354787,
      netProfitMargin: 23.448224774217888,
      evToSales: 0.0,
      evToEbitda: 20.05,
      earningsYield: 0.9006662280957147,
      sectorPb: 2.1522622613997844,
      sectorDivYield: 0.8524867847787806,
      priceToOcf: -25.812343931157454,
      priceToFcf: 9.43,
      roic: 0.0,
      pePremiumVsSector: 0.37131584916942195,
      pbPremiumVsSector: 0.24984768271246027,
      divYieldVsSector: 0.04751321522121943,
      sectorPe: 14.540778488104875,
      priceToSales: 3.41,
      pegRatio: 0.9659698058950398,
    },
  },
  {
    displayName: "HDFC Bank",
    price: 1177065.34,
    marketCap: 1177065.34,
    divYield: 0.9,
    npQuarter: 115015.51,
    yoyQtrPrft: 115015.51,
    salesQtr: 115015.51,
    yoyQtrSales: 115015.51,
    sectorRoe: 14.315278023886657,
    sectorRoce: 5.508082532503328,
    nseScriptCode: "HDFCBANK",
    stats: {
      marketCap: 1177065.34,
      pbRatio: 2.69,
      peRatio: 19.94,
      bookValue: 575.6588705,
      epsTtm: 77.71,
      roe: 13.49897978269006,
      industryPe: 14.540778488104875,
      cappedType: "Large Cap",
      dividendYieldInPercent: 0.9,
      faceValue: 1,
      returnOnAssets: 0.0,
      operatingProfitMargin: 82.872522354787,
      netProfitMargin: 23.448224774217888,
      evToSales: 0.0,
      evToEbitda: 20.05,
      earningsYield: 0.9006662280957147,
      sectorPb: 2.1522622613997844,
      sectorDivYield: 0.8524867847787806,
      priceToOcf: -25.812343931157454,
      priceToFcf: 9.43,
      roic: 0.0,
      pePremiumVsSector: 0.37131584916942195,
      pbPremiumVsSector: 0.24984768271246027,
      divYieldVsSector: 0.04751321522121943,
      sectorPe: 14.540778488104875,
      priceToSales: 3.41,
      pegRatio: 0.9659698058950398,
    },
  },
  {
    displayName: "HDFC Bank",
    price: 1177065.34,
    marketCap: 1177065.34,
    divYield: 0.9,
    npQuarter: 115015.51,
    yoyQtrPrft: 115015.51,
    salesQtr: 115015.51,
    yoyQtrSales: 115015.51,
    sectorRoe: 14.315278023886657,
    sectorRoce: 5.508082532503328,
    nseScriptCode: "HDFCBANK",
    stats: {
      marketCap: 1177065.34,
      pbRatio: 2.69,
      peRatio: 19.94,
      bookValue: 575.6588705,
      epsTtm: 77.71,
      roe: 13.49897978269006,
      industryPe: 14.540778488104875,
      cappedType: "Large Cap",
      dividendYieldInPercent: 0.9,
      faceValue: 1,
      returnOnAssets: 0.0,
      operatingProfitMargin: 82.872522354787,
      netProfitMargin: 23.448224774217888,
      evToSales: 0.0,
      evToEbitda: 20.05,
      earningsYield: 0.9006662280957147,
      sectorPb: 2.1522622613997844,
      sectorDivYield: 0.8524867847787806,
      priceToOcf: -25.812343931157454,
      priceToFcf: 9.43,
      roic: 0.0,
      pePremiumVsSector: 0.37131584916942195,
      pbPremiumVsSector: 0.24984768271246027,
      divYieldVsSector: 0.04751321522121943,
      sectorPe: 14.540778488104875,
      priceToSales: 3.41,
      pegRatio: 0.9659698058950398,
    },
  },
];

const StockScreener = () => {
  const [stocks, setStocks] = useState(dummyData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await getAllStocksApi();
      setStocks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stocks:", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "white", width: "100vw", height: "100vh" }}>
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "50px" }}>
          <Typography variant="h4">Tech Tangents Stock screener</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <StockFilter />
        </Grid>
        <Grid item xs={12} md={8} marginTop={10}>
          <StockScreenerTable stocks={stocks} />
        </Grid>
      </Grid>
    </div>
  );
};

export default StockScreener;
