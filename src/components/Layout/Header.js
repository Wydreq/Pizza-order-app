import React from "react";
import pizzaImage from "../../assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <FontAwesomeIcon icon={faPizzaSlice} className={classes.icon} />
        <h1>Pizzaliana</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pizzaImage} alt="Pizza" />
      </div>
    </React.Fragment>
  );
};

export default Header;
