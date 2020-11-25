import React from "react";

//import Counter from "./components/Counter";
import useCounter from "./custom_hooks/useCounter";

const App = () => {
  const [count, Increment, Decrement] = useCounter(0, 1);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default App;
