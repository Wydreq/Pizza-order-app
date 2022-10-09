import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Pizzas from "./components/Meals/Pizzas";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Pizzas />
      </main>
    </React.Fragment>
  );
}

export default App;
