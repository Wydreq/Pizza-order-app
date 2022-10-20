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
  const [menuList, setMenuList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMenuHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMenu = [];

      for (const key in data) {
        loadedMenu.push({
          id: key,
          name: data[key].name,
          ingredients: data[key].ingredients,
          price: data[key].price,
        });
      }
      setMenuList(loadedMenu);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMenuHandler();
  }, [fetchMenuHandler]);

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

  const removeMenuPositionHandler = useCallback(async (id) => {
    fetch(
      // don't add .json at [data Name]
      `https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/menu/${id}.json`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          // if sucess do something
        } else {
          // if fail throw error
          throw new Error("could not delete data");
        }
      })
      .catch((error) => {
        this.error = error.message;
      });
  });

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
