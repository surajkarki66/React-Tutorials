import React from "react";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Ishan Manandhar",
      location: "Kathmandu",
      designation: "Frontend Dev",
    },
  ],
};

export const employeeContext = React.createContext(initialState);
