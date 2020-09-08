import React, { useReducer } from "react";

//import AppReducer from "./AppReducer";
import GlobalContext from "./employee-context";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
