import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StockFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    minVol: "",
    maxVol: "",
    minAtr: "",
    maxAtr: "",
    maxMovAvg: "",
    minMovAvg: "",
    minRsi: "",
    maxRsi: "",
    minMacd: "",
    maxMacd: "",
    minPeRatio: "",
    maxPeRatio: "",
    minEps: "",
    maxEps: "",
    minPbRatio: "",
    maxPbRatio: "",
    minMkp: "",
    maxMkp: "",
    industry: "",
    sector: "",
    minDbr: "",
    maxDbr: "",
    minDivYld: "",
    maxDivYld: "",

    // Add more filter options as needed
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleFilter = () => {
    // Pass the filters object to the parent component for filtering
    onFilter(filters);
  };
  console.log("filters", filters);
  return (
    <Box p={2} style={{ backgroundColor: "#f0f0f0" }} marginTop={10}>
      <Accordion>
        <AccordionSummary style={{ backgroundColor: "#66aec7" }}>
          <Typography variant="h6">Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Price Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                name="minPrice"
                label="Min. Price"
                variant="outlined"
                value={filters.minPrice}
                onChange={handleChange}
              />
              <TextField
                name="maxPrice"
                label="Max. Price"
                variant="outlined"
                value={filters.maxPrice}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Volume Filter:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <TextField
                name="minVol"
                label="Min. Vol"
                variant="outlined"
                value={filters.minVol}
                onChange={handleChange}
              />
              <TextField
                name="maxVol"
                label="Max. Vol"
                variant="outlined"
                value={filters.maxVol}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Volatility Filter:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Average True Range (ATR):</Typography>
              <TextField
                name="minAtr"
                label="Min. ATR"
                variant="outlined"
                value={filters.minAtr}
                onChange={handleChange}
              />
              <TextField
                name="maxAtr"
                label="Max. ATR"
                variant="outlined"
                value={filters.maxAtr}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Technical Indicators:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Moving Averages:</Typography>
              <TextField
                name="maxMovAvg"
                label="Min."
                variant="outlined"
                value={filters.minMovAvg}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="minMovAvg"
                label="Max."
                variant="outlined"
                value={filters.maxMovAvg}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Relative Strength Index (RSI)</Typography>
              <TextField
                name="minRsi"
                label="Min. RSI"
                variant="outlined"
                value={filters.minRsi}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxRsi"
                label="Max. RSI"
                variant="outlined"
                value={filters.maxRsi}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>
                MACD (Moving Average Convergence Divergence):
              </Typography>
              <TextField
                name="minMacd"
                label="Min. MACD"
                variant="outlined"
                value={filters.minMacd}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxMacd"
                label="Max. MACD"
                variant="outlined"
                value={filters.maxMacd}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Fundamental Metrics:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Price-to-Earnings (P/E) Ratio: </Typography>
              <TextField
                name="minPeRatio"
                label="Min."
                variant="outlined"
                value={filters.minPeRatio}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxPeRatio"
                label="Max."
                variant="outlined"
                value={filters.maxPeRatio}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Earnings Per Share (EPS):</Typography>
              <TextField
                name="minEps"
                label="Min. EPS"
                variant="outlined"
                value={filters.minEps}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxEps"
                label="Max. EPS"
                variant="outlined"
                value={filters.maxEps}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Price-to-Book (P/B) Ratio:</Typography>
              <TextField
                name="minPbRatio"
                label="Min."
                variant="outlined"
                value={filters.minPbRatio}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxPbRatio"
                label="Max. Atr"
                variant="outlined"
                value={filters.maxPbRatio}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Dividend Yield: </Typography>
              <TextField
                name="minDivYld"
                label="Min."
                variant="outlined"
                value={filters.minDivYld}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxDivYld"
                label="Max."
                variant="outlined"
                value={filters.maxDivYld}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Debt-to-Equity Ratio:</Typography>
              <TextField
                name="minDbr"
                label="Min."
                variant="outlined"
                value={filters.minDbr}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <TextField
                name="maxDbr"
                label="Max."
                variant="outlined"
                value={filters.maxDbr}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Sector and Industry Filters:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Sector: </Typography>
              <TextField
                name="sector"
                label="Sector"
                variant="outlined"
                value={filters.sector}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />

              <Typography>Industry:</Typography>
              <TextField
                name="industry"
                label="Industry"
                variant="outlined"
                value={filters.industry}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Market Cap Filter:</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Minimum Market Cap: </Typography>
              <TextField
                name="minMkp"
                label="Min."
                variant="outlined"
                value={filters.minMkp}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />

              <Typography>Maximum Market Cap:</Typography>
              <TextField
                name="maxMkp"
                label="Min."
                variant="outlined"
                value={filters.maxMkp}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Others</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>Dividend Status:</Typography>
              <TextField
                name="minDivStat"
                label="Min."
                variant="outlined"
                value={filters.minAt}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Analyst Ratings:</Typography>
              <TextField
                name="minAtr"
                label="Min. ATR"
                variant="outlined"
                value={filters.minAtr}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
              <Typography>Earnings Date:</Typography>
              <TextField
                name="minAtr"
                label="Min. ATR"
                variant="outlined"
                value={filters.minAtr}
                onChange={handleChange}
                style={{ marginTop: "10px" }}
              />
            </AccordionDetails>
          </Accordion>

          {/* Add more filter options as needed */}
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Apply Filters
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default StockFilter;
