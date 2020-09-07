import React from "react";

import useGlobalState from "./useGlobalState";
import Context from "./context";

const GlobalStateProvider = ({ children }) => {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
};

export default GlobalStateProvider;
