import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import ContactForm from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/posts" component={Posts} exact />
          <Route path="/contact" component={ContactForm} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
