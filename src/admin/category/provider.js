import React, { createContext, useReducer } from "react";
import categoryReducer, { categoryState } from "./CategogyContext";
export const CategoryProvider = createContext();
function Provider({ children }) {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(categoryReducer, categoryState);
  return (
    <CategoryProvider.Provider value={[data, dispatch]}>
      {children}
    </CategoryProvider.Provider>
  );
}
export default Provider;
