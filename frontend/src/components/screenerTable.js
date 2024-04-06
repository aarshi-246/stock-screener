import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  TableSortLabel,
  TextField,
} from "@mui/material";

const StockScreenerTable = ({ stocks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid container>
      <Grid item xs={12} md={12} marginLeft={10}>
        <Grid item xs={12} md={12} marginBottom={5}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginTop: 10 }}
          />
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead col>
              <TableRow style={{ backgroundColor: "#66aec7" }}>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "nseScriptCode"}
                    direction={orderBy === "nseScriptCode" ? order : "asc"}
                    onClick={handleSort("nseScriptCode")}
                    color="blue"
                  >
                    Symbol
                  </TableSortLabel>
                </TableCell>
                {/* Add similar TableSortLabel components for other headers */}
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Market Cap</TableCell>
                <TableCell>Dividend Yld</TableCell>
                <TableCell>NP Qtr.</TableCell>
                <TableCell>Qtr Profit Var</TableCell>
                <TableCell>Sales Qtr.</TableCell>
                <TableCell>Sec. ROE</TableCell>
                <TableCell>Sec. ROCE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStocks.map((stock) => (
                <TableRow key={stock.nseScriptCode}>
                  <TableCell>{stock.nseScriptCode}</TableCell>
                  {/* Add similar TableCell components for other data */}
                  <TableCell>{stock.displayName}</TableCell>
                  <TableCell>{stock.price}</TableCell>
                  <TableCell>{stock.divYield}</TableCell>
                  <TableCell>{stock.npQuarter}</TableCell>
                  <TableCell>{stock.yoyQtrPrft}</TableCell>
                  <TableCell>{stock.salesQtr}</TableCell>
                  <TableCell>{stock.yoyQtrSales}</TableCell>
                  <TableCell>{stock.sectorRoe}</TableCell>
                  <TableCell>{stock.sectorRoce}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default StockScreenerTable;
