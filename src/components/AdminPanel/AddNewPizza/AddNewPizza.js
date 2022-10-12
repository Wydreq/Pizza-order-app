import React, { useState } from "react";
import classes from "./AddNewPizza.module.css";
import AddNewPizzaForm from "./AddNewPizzaForm";

const AddNewPizza = (props) => {
  const [isAddActive, setIsAddActive] = useState(false);

  const onAddActive = () => {
    if (!isAddActive) setIsAddActive(true);
  };

  const onRemoveActive = () => {
    if (isAddActive) setIsAddActive(false);
  };

  return (
    <div
      className={
        isAddActive
          ? `${classes.container} ${classes.active}`
          : `${classes.container}`
      }
      onClick={onAddActive}
    >
      <h1>Add new menu position</h1>
      <p>+</p>
      {isAddActive && (
        <AddNewPizzaForm
          onRemoveActive={onRemoveActive}
          onRestart={props.onRestart}
        />
      )}
    </div>
  );
};

export default AddNewPizza;
