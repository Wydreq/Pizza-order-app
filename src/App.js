import "./App.css";
import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import UserPanel from "./components/UserPanel/UserPanel";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  const [isAdminSignedIn, setIsAdminSignedIn] = useState(false);

  const onAdminLog = () => {
    if (isAdminSignedIn) {
      setIsAdminSignedIn(false);
    } else {
      setIsAdminSignedIn(true);
    }
  };

  return (
    <CartProvider>
      {!isAdminSignedIn && <UserPanel onClick={onAdminLog} />}
      {isAdminSignedIn && <AdminPanel onClick={onAdminLog} />}
    </CartProvider>
  );
}

export default App;
