import React from "react";
import Header from "../Layout/Header";
import AddNewPizza from "./AddNewPizza/AddNewPizza";
import classes from "./AdminPanel.module.css";
import PizzasList from "./PizzasList/PizzasList";

const AdminPanel = (props) => {
  return (
    <React.Fragment>
      <Header isAdminSignedIn="true" onClick={props.onClick} />
      <section className={classes.container}>
        <AddNewPizza />
        <PizzasList />
      </section>
    </React.Fragment>
  );
};

export default AdminPanel;
