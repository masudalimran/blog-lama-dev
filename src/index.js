import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./Context/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
