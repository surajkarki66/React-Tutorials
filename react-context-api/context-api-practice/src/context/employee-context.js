import React from "react";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Binish Joshi",
      location: "Kathmandu",
      designation: "Software Dev",
    },
  ],
};

export const employeeContext = React.createContext(initialState);
