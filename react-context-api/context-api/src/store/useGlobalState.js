import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// this is custom hook.
const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isLoggedIn: false,
  });

  return { globalState, globalDispatch };
};

export default useGlobalState;
