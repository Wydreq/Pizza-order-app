import Card from "../UI/Card";
import classes from "./AvailablePizzas.module.css";
import PizzaItem from "./PizzaItem/PizzaItem";

const AVAILABLE_PIZZAS = [
  {
    id: "m1",
    name: "Margerita",
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
    name: "Americana Barcebue",
    ingredients: "Barbecue sauce, cheese, oregano",
    price: 18.99,
  },
];

const AvailablePizzas = () => {
  const pizzasList = AVAILABLE_PIZZAS.map((pizza) => (
    <PizzaItem
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  ));

  return (
    <section className={classes.section}>
      <Card>
        <ul>{pizzasList}</ul>
      </Card>
    </section>
  );
};

export default AvailablePizzas;
