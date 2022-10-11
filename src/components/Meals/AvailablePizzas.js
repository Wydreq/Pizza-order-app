import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./AvailablePizzas.module.css";
import PizzaItem from "./PizzaItem/PizzaItem";
import PizzasContext from "../../store/pizzas-context";

const AvailablePizzas = () => {
  const ctx = useContext(PizzasContext);
  const pizzasList = ctx.map((pizza) => (
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
