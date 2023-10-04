import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import PricingPlan from "./Components/PricingPlan/PricingPlan";
import Contact from "./Components/Contact/Contact";
import Team from "./Components/Team/Team";
import Cart from "./Components/Cart/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
