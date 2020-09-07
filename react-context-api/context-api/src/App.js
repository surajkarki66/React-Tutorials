import React from "react";

import "./App.css";
import GlobalStateProvider from "./store/GlobalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Download Image</h1>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
