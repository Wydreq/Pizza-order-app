import React from "react";

const PizzasContext = React.createContext({
  id: "",
  name: "",
  ingredients: "",
  price: 0,
});

export default PizzasContext;
