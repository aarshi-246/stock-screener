import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const FundamentalsTable = ({ fundamentals }) => {
  return (
    <div className="fundamentals-table">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Short Name</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fundamentals.map((fundamental, index) => (
              <TableRow key={index}>
                <TableCell>{fundamental.name}</TableCell>
                <TableCell>{fundamental.shortName}</TableCell>
                <TableCell>{fundamental.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FundamentalsTable;
