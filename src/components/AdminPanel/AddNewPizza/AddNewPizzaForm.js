import React, { useContext, useState } from "react";
import PizzasContext from "../../../store/pizzas-context";
import classes from "./AddNewPizzaForm.module.css";

const AddNewPizzaForm = (props) => {
  const ctx = useContext(PizzasContext);
  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const onNameSet = (event) => {
    setEnteredName(event.target.value);
  };
  const onIngredientsSet = (event) => {
    setEnteredIngredients(event.target.value);
  };
  const onPriceSet = (event) => {
    setEnteredPrice(event.target.value);
  };

  const addMenuPositionHandler = (event) => {
    event.preventDefault();
    ctx.push({
      id: Math.random().toString(),
      name: enteredName,
      ingredients: enteredIngredients,
      price: enteredPrice,
    });
    console.log(ctx);
    setEnteredName("");
    setEnteredIngredients("");
    setEnteredPrice("");
    props.onRestart();
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={addMenuPositionHandler}>
        <label>Name</label>
        <input type="text" onChange={onNameSet} value={enteredName} />
        <label>Ingredients</label>
        <input
          type="text"
          onChange={onIngredientsSet}
          value={enteredIngredients}
        />
        <label>Price</label>
        <input
          className={classes.price}
          type="text"
          onChange={onPriceSet}
          value={enteredPrice}
        />
        <section className="buttons">
          <button
            className={classes.closeButton}
            onClick={props.onRemoveActive}
          >
            Close
          </button>
          <button type="submit">Add</button>
        </section>
      </form>
    </React.Fragment>
  );
};

export default AddNewPizzaForm;
