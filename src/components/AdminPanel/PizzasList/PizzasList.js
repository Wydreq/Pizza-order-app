import React, { useContext, useState } from "react";
import PizzasContext from "../../../store/pizzas-context";
import classes from "./PizzasList.module.css";
import Modal from "../../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const PizzasList = (props) => {
  let ctx = useContext(PizzasContext);
  const [isModal, setIsModal] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredID, setEnteredID] = useState();

  Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  };

  const enteringNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteringIngredientsHandler = (event) => {
    setEnteredIngredients(event.target.value);
  };

  const enteringPriceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const editMenuPositionHandler = () => {
    setIsModal(!isModal);
  };

  const removeMenuPositionHandler = (id) => {
    const objWithIdIndex = ctx.findIndex((obj) => obj.id === id);
    ctx.splice(objWithIdIndex, 1);
    props.onRestart();
  };

  const submitEditHandler = (event) => {
    event.preventDefault();
    const objWithIdIndex = ctx.findIndex((obj) => obj.id === enteredID);
    ctx[objWithIdIndex].name = enteredName;
    ctx[objWithIdIndex].ingredients = enteredIngredients;
    ctx[objWithIdIndex].price = enteredPrice;
    props.onRestart();
    setIsModal(false);
  };

  const menuPositionUpHandler = (id) => {
    const objWithIdIndex = ctx.findIndex((obj) => obj.id === id);
    if (objWithIdIndex === 0) {
      return;
    }
    ctx.swap(objWithIdIndex, objWithIdIndex - 1);
    props.onRestart();
  };
  const menuPositionDownHandler = (id) => {
    const objWithIdIndex = ctx.findIndex((obj) => obj.id === id);
    if (objWithIdIndex >= ctx.length - 1) {
      return;
    }
    ctx.swap(objWithIdIndex, objWithIdIndex + 1);
    props.onRestart();
  };

  return (
    <div className={classes.menuContainer}>
      {ctx.map((pizza) => {
        return (
          <React.Fragment key={pizza.id}>
            <div className={classes.itemContainer} key={pizza.id}>
              <span className={classes.pizzaName}>{pizza.name}</span>
              <span className={classes.pizzaIngredients}>
                {pizza.ingredients}
              </span>
              <span className={classes.pizzaPrice}>${pizza.price}</span>
              <button
                className={classes.editButton}
                onClick={() => {
                  editMenuPositionHandler();
                  setEnteredID(pizza.id);
                  setEnteredName(pizza.name);
                  setEnteredIngredients(pizza.ingredients);
                  setEnteredPrice(pizza.price);
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
              <div className={classes.arrowContainer}>
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className={classes.arrowUp}
                  onClick={() => {
                    menuPositionUpHandler(pizza.id);
                  }}
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={classes.arrowDown}
                  onClick={() => {
                    menuPositionDownHandler(pizza.id);
                  }}
                />
              </div>
            </div>
            {isModal && (
              <Modal onModalStatusChange={editMenuPositionHandler}>
                <form
                  className={classes.modalContainer}
                  onSubmit={submitEditHandler}
                >
                  <h1>Edit menu position</h1>
                  <label>Item name: </label>
                  <input
                    type="text"
                    onChange={enteringNameHandler}
                    value={enteredName}
                  />
                  <label>Item ingredients: </label>
                  <input
                    type="text"
                    onChange={enteringIngredientsHandler}
                    value={enteredIngredients}
                  />
                  <label>Item price: </label>
                  <input
                    type="text"
                    onChange={enteringPriceHandler}
                    value={enteredPrice}
                  />
                  <button type="submit">Edit item</button>
                  <button onClick={editMenuPositionHandler}>Close</button>
                </form>
              </Modal>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PizzasList;
