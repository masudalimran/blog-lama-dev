import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./Context/DataContext";
import store from "./Redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
