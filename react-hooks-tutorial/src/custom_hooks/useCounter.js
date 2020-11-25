import { useState } from "react";

function useCounter(val, step) {
  const [count, setCount] = useState(val);
  function Increment() {
    setCount(count + step);
  }
  function Decrement() {
    setCount(count - step);
  }

  return [count, Increment, Decrement];
}

export default useCounter;
