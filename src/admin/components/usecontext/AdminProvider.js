import { useState } from "react";
import { ADMIN_CONTEXT } from "./adminContext";

function AdminProvider({ children }) {
  const [toggleNav, setToggleNav] = useState(true);
  const HANDLE_BTN_MENU = () => {
    setToggleNav(!toggleNav);
  };

  const VALUE = {
    toggleNav,
    HANDLE_BTN_MENU,
  };

  return (
    <ADMIN_CONTEXT.Provider value={VALUE}>{children}</ADMIN_CONTEXT.Provider>
  );
}

export default AdminProvider;
