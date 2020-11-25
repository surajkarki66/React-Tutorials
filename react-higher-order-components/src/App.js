import React from "react";

import "./App.css";
import ToUpperCase from "./hoc/ToUpperCase";

const Username = (props) => {
  return <div>{props.children}</div>;
};

const App = ({ name }) => {
  const UpperCaseUsername = ToUpperCase(Username);
  return (
    <div className="App">
      <UpperCaseUsername>{name}</UpperCaseUsername>
    </div>
  );
};

export default App;
