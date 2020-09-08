import React from "react";
import { Route, Switch } from "react-router-dom";
import "./stylesheet/styles.css";
import { Home } from "./components/Home";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
