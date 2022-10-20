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

  async function addMenuPositionHandler(event) {
    event.preventDefault();

    const menuPosition = {
      id: Math.random().toString(),
      name: enteredName,
      ingredients: enteredIngredients,
      price: enteredPrice,
    };

    const response = await fetch(
      "https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/menu.json",
      {
        method: "POST",
        body: JSON.stringify(menuPosition),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    setEnteredName("");
    setEnteredIngredients("");
    setEnteredPrice("");
    props.onRestart();
  }

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
