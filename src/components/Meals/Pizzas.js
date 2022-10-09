import React from "react";
import AvailablePizzas from "./AvailablePizzas";
import PizzaSummary from "./PizzaSummary";

const Pizzas = () => {
  return (
    <React.Fragment>
      <PizzaSummary />
      <AvailablePizzas />
    </React.Fragment>
  );
};

export default Pizzas;
