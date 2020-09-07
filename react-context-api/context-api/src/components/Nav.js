import React, { useContext } from "react";
import Context from "../store/context";

export const Nav = () => {
  const { globalState, globalDispatch } = useContext(Context);
  return (
    <nav>
      {globalState.isLoggedIn ? (
        <button
          type="button"
          onClick={() => globalDispatch({ type: "LOGOUT" })}
        >
          Logout{" "}
        </button>
      ) : (
        <button type="button" onClick={() => globalDispatch({ type: "LOGIN" })}>
          Login
        </button>
      )}
    </nav>
  );
};
