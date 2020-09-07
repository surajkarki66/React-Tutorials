import React, { useContext } from "react";
import Context from "../store/context";

export const DownloadImage = () => {
  // exported as an object.
  const { globalState } = useContext(Context);
  return (
    <form
      method="get"
      action="https://i.insider.com/5d0bae5ce3ecba536905f1c3?width=2400"
    >
      <button disabled={!globalState.isLoggedIn} type="submit">
        Download
      </button>
    </form>
  );
};
