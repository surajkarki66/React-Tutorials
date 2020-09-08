import React from "react";
import { Route, Switch } from "react-router-dom";
import "./stylesheet/styles.css";
import { Home } from "./components/Home";
import { AddEmployee } from "./components/AddEmployee";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddEmployee} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
