import React, { useState } from "react";
import classes from "./AddNewPizzaForm.module.css";

const AddNewPizzaForm = (props) => {
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
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={addMenuPositionHandler}>
        <label>Name</label>
        <input type="text" onChange={onNameSet} />
        <label>Ingredients</label>
        <input type="text" onChange={onIngredientsSet} />
        <label>Price</label>
        <input className={classes.price} type="text" onChange={onPriceSet} />
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
