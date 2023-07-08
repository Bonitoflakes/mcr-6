import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RestaurantProvider } from "./contexts/Restaurant.context";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </BrowserRouter>
  </React.StrictMode>
);
