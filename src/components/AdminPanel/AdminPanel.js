import React, { useState } from "react";
import Header from "../Layout/Header";
import AddNewPizza from "./AddNewPizza/AddNewPizza";
import classes from "./AdminPanel.module.css";
import PizzasList from "./PizzasList/PizzasList";
import NewOrders from "./NewOrders/NewOrders";

const AdminPanel = (props) => {
  const [restart, setRestart] = useState();

  const restartHandler = () => {
    setRestart(!restart);
  };

  return (
    <React.Fragment>
      <Header isAdminSignedIn="true" onClick={props.onClick} />
      <section className={classes.container}>
        <AddNewPizza onRestart={restartHandler} />
        <PizzasList onRestart={restartHandler} />
        <NewOrders/>
      </section>
    </React.Fragment>
  );
};

export default AdminPanel;
