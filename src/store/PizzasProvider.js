import PizzasContext from "./pizzas-context";

const PizzasProvider = (props) => {
  const AVAILABLE_PIZZAS = [
    {
      id: "m1",
      name: "Margherita",
      ingredients: "Tomato sauce, cheese, oregano",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Capriciossa",
      ingredients: "Tomato sauce, cheese, oregano, meat",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Prosciutto Crudo",
      ingredients: "Tomato sauce, cheese, oregano, cherry tomatoes",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Americano Barcebue",
      ingredients: "Barbecue sauce, cheese, oregano",
      price: 18.99,
    },
  ];
  return (
    <PizzasContext.Provider value={AVAILABLE_PIZZAS}>
      {props.children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
