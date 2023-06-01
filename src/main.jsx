import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import App from "./components/Home/Home.jsx";
import SearchPage from "./components/Search/SearchPage.jsx";
import HistoriquePage from "./components/History/HistoryPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

// import style
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/history" element={<HistoriquePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
