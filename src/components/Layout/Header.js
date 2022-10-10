import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import PizzaCarousel from "./PizzaCarousel";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <FontAwesomeIcon icon={faPizzaSlice} className={classes.icon} />
        <h1>
          Pizza
          <span className={classes.liana}>liana</span>
        </h1>
        {props.isAdminSignedIn === "false" && (
          <HeaderCartButton onClick={props.onClick} />
        )}
        {props.isAdminSignedIn === "true" && (
          <div className={classes.logout} onClick={props.onClick}>
            Logout from Admin Panel
          </div>
        )}
      </header>
      {props.isAdminSignedIn === "false" && <PizzaCarousel />}
    </React.Fragment>
  );
};

export default Header;
