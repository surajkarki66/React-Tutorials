import React, { useReducer } from "react";

import EmployeeReducer from "./employeeReducer";
import { employeeContext, initialState } from "./employee-context";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(EmployeeReducer, initialState);

  function addEmployee(employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees,
    });
  }

  return (
    <employeeContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
};
