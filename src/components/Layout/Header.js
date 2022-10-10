import React from "react";
import pizzaImage from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import PizzaIcon from "./PizzaIcon";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>
          <PizzaIcon />
          Pizzaliana
        </h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="Pizza" />
      </div>
    </React.Fragment>
  );
};

export default Header;
