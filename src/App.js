import "./App.css";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import UserPanel from "./components/UserPanel/UserPanel";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Modal from "./components/UI/Modal";
import classes from "./App.module.css";


function App() {
  const [isAdminSignedIn, setIsAdminSignedIn] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);
  const [enteredLogin, setEnteredLogin] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const onAdminLog = (event) => {
    event.preventDefault();
    if (enteredLogin === "test" && enteredPassword === "test") {
      setIsAdminSignedIn(true);
      setIsModalShown(false);
      setEnteredLogin("");
      setEnteredPassword("");
    } else {
      setEnteredLogin("");
      setEnteredPassword("");
    }
  };

  const adminLogoutHandler = () => {
    setIsAdminSignedIn(false);
  };

  const closingModalHandler = () => {
    setIsModalShown(false);
  };

  const showingModalHandler = () => {
    setIsModalShown(true);
  };

  const enteringLogin = (event) => {
    setEnteredLogin(event.target.value);
  };

  const enteringPassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <CartProvider>
      {!isAdminSignedIn && <UserPanel onClick={showingModalHandler} />}
      {isAdminSignedIn && <AdminPanel onClick={adminLogoutHandler} />}
      {isModalShown && (
        <Modal>
          <form className={classes.adminModal} onSubmit={onAdminLog}>
            <h1>Admin panel</h1>
            <label>Login: </label>
            <input type="text" onChange={enteringLogin} value={enteredLogin} />
            <label>Password</label>
            <input
              type="password"
              onChange={enteringPassword}
              value={enteredPassword}
            />
            <div className={classes.box}>
              <button onClick={closingModalHandler}>Close</button>
              <button type="submit">Sign in</button>
            </div>
          </form>
        </Modal>
      )}
    </CartProvider>
  );
}

export default App;
