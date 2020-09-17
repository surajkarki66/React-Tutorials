import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import PokeMon from "./components/Pokemon";
import PokeDex from "./components/Pokedex";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <PokeDex {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <PokeMon {...props} />}
      />
    </Switch>
  );
}

export default App;
