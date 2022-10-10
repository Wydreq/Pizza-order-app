import classes from "./PizzaItemForm.module.css";
import Input from "../../UI/Input";
import { useRef } from "react";

const PizzaItemForm = (props) => {
  const amoutInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amoutInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amoutInputRef}
        label="Amount: "
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default PizzaItemForm;
