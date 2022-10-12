import { useContext } from "react";
import PizzasContext from "../../../store/pizzas-context";
import classes from "./PizzasList.module.css";

const PizzasList = () => {
  let ctx = useContext(PizzasContext);

  const editMenuPositionHandler = (id) => {};

  const removeMenuPositionHandler = (id) => {
    const objWithIdIndex = ctx.findIndex((obj) => obj.id === id);
    ctx.splice(objWithIdIndex, 1);
  };

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
            <button
              className={classes.editButton}
              onClick={() => {
                editMenuPositionHandler(pizza.id);
              }}
            >
              Edit
            </button>
            <button
              className={classes.removeButton}
              onClick={() => {
                removeMenuPositionHandler(pizza.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PizzasList;
