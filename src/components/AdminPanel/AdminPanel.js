import React from "react";
import Header from "../Layout/Header";
import AddNewPizza from "./AddNewPizza/AddNewPizza";
import classes from "./AdminPanel.module.css";

const AdminPanel = (props) => {
  return (
    <React.Fragment>
      <Header isAdminSignedIn="true" onClick={props.onClick} />
      <section className={classes.container}>
        <AddNewPizza />
      </section>
    </React.Fragment>
  );
};

export default AdminPanel;
