import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClosedPage from "./Components/ClosedPage";
import RestroomPage from "./Components/RestroomPage";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3} preventDuplicate>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="closed" element={<ClosedPage />} />
        <Route path="restroom" element={<RestroomPage />} />
      </Routes>
    </SnackbarProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
