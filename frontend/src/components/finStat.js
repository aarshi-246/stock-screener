import React from "react";
import { Typography } from "@mui/material";

const FinancialStatements = ({ financialStatement }) => {
  return (
    <div className="financial-statements">
      <Typography variant="h6">Financial Statements</Typography>
      {financialStatement.map((statement, index) => (
        <div key={index}>
          <Typography variant="body1">{statement.title}</Typography>
          <Typography variant="body1">Yearly:</Typography>
          <ul>
            {Object.entries(statement.yearly).map(([year, value]) => (
              <li key={year}>
                {year}: {value}
              </li>
            ))}
          </ul>
          {statement.quarterly && (
            <React.Fragment>
              <Typography variant="body1">Quarterly:</Typography>
              <ul>
                {Object.entries(statement.quarterly).map(([quarter, value]) => (
                  <li key={quarter}>
                    {quarter}: {value}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </div>
      ))}
    </div>
  );
};

export default FinancialStatements;
