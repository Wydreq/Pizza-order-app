import classes from "./PizzaItem.module.css";
import PizzaItemForm from "./PizzaItemForm";

const PizzaItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.ingredients}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PizzaItemForm />
      </div>
    </li>
  );
};

export default PizzaItem;
