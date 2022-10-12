import classes from "./PizzaItem.module.css";
import PizzaItemForm from "./PizzaItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const PizzaItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.ingredients}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div className={classes.formContainer}>
        <PizzaItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default PizzaItem;
