import React, { useState, useEffect, useCallback } from "react";
import classes from "./PizzasList.module.css";
import Modal from "../../UI/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const PizzasList = (props) => {
  const [isModal, setIsModal] = useState(false);

  const [enteredName, setEnteredName] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredID, setEnteredID] = useState();
  const [menuList, setMenuList] = useState([]);
  const [error, setError] = useState(null);

  const fetchMenuHandler = useCallback(async () => {
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
          fetchMenuHandler();
        } else {
          // if fail throw error
          throw new Error("could not delete data");
        }
      })
      .catch((error) => {
        this.error = error.message;
      });
  }, []);

  const submitEditHandler = useCallback(async (event) => {
    event.preventDefault();
    console.log(enteredID);
    fetch(
        `https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/menu/${enteredID}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: enteredID,
            ingredients: enteredIngredients,
            name: enteredName,
            price: enteredPrice
          })
        }
    )
        .then((response) => {
          if (response.ok) {
            fetchMenuHandler();
          } else {
            throw new Error("could not delete data");
          }
        })
        .catch((error) => {
          this.error = error.message;
        });
  }, []);

  const menuPositionUpHandler = (id) => {
    const objWithIdIndex = menuList.findIndex((obj) => obj.id === id);
    if (objWithIdIndex === 0) {
      return;
    }
    menuList.swap(objWithIdIndex, objWithIdIndex - 1);
    props.onRestart();
  };
  const menuPositionDownHandler = (id) => {
    const objWithIdIndex = menuList.findIndex((obj) => obj.id === id);
    if (objWithIdIndex >= menuList.length - 1) {
      return;
    }
    menuList.swap(objWithIdIndex, objWithIdIndex + 1);
    props.onRestart();
  };

  return (
    <div className={classes.menuContainer}>
      {menuList.map((pizza) => {
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
                  setEnteredID(pizza.id);
                  setEnteredName(pizza.name);
                  setEnteredIngredients(pizza.ingredients);
                  setEnteredPrice(pizza.price);
                  editMenuPositionHandler();
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
