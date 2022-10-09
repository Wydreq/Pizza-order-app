import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Pizzas from "./components/Meals/Pizzas";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Pizzas />
      </main>
    </CartProvider>
  );
}

export default App;
