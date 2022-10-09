import React from "react";
import pizzaImage from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Pizzaliana</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="Pizza" />
      </div>
    </React.Fragment>
  );
};

export default Header;
