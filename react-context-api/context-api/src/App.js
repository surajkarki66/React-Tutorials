import React from "react";

import "./App.css";
import GlobalStateProvider from "./store/GlobalStateProvider";
import { Nav, DownloadImage } from "./components/index";
import { LoginNotification } from "./components/index";

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Download Image</h1>
        <Nav />
        <DownloadImage />
        <LoginNotification />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
