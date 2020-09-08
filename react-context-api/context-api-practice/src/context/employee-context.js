import React from "react";

export const initialState = {
  employees: [],
};

export const employeeContext = React.createContext(initialState);
