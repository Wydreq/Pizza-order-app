import React, { useState } from "react";
import Header from "../Layout/Header";
import Pizzas from "../Meals/Pizzas";
import Cart from "../Cart/Cart";
import Footer from "../Layout/Footer";
const UserPanel = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header onClick={showCartHandler} isAdminSignedIn="false" />
      <main>
        <Pizzas />
      </main>
      <footer>
        <Footer onClick={props.onClick} title="Admin Panel" />
      </footer>
    </React.Fragment>
  );
};

export default UserPanel;
