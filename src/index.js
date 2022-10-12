import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PizzasProvider from "./store/PizzasProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PizzasProvider>
      <App />
    </PizzasProvider>
  </React.StrictMode>
);
