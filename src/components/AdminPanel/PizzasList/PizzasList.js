import { useContext } from "react";
import PizzasContext from "../../../store/pizzas-context";
import classes from "./PizzasList.module.css";

const PizzasList = () => {
  const ctx = useContext(PizzasContext);

  return (
    <div className={classes.menuContainer}>
      {ctx.map((pizza) => {
        return (
          <div className={classes.itemContainer}>
            <span className={classes.pizzaName}>{pizza.name}</span>
            <span className={classes.pizzaIngredients}>
              {pizza.ingredients}
            </span>
            <span className={classes.pizzaPrice}>${pizza.price}</span>
            <button className={classes.editButton}>Edit</button>
            <button className={classes.removeButton}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default PizzasList;
