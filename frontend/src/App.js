import logo from "./logo.svg";
import "./App.css";
import StockScreener from "./screens/stockTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import CompanyPage from "./screens/companyScreen";
function App() {
  return (
    <div className="App">
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <Router>
            <Routes>
              <Route path="/screener" Component={StockScreener} />
            </Routes>
            <Routes>
              <Route path="/company" Component={CompanyPage} />
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
