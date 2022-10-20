import { useEffect, useCallback, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailablePizzas.module.css";
import PizzaItem from "./PizzaItem/PizzaItem";

const AvailablePizzas = () => {
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

  const pizzasList = menuList.map((pizza) => (
    <PizzaItem
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  ));

  return (
    <section className={classes.section}>
      <Card>
        <ul>{pizzasList}</ul>
      </Card>
    </section>
  );
};

export default AvailablePizzas;
