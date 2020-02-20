import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "./contexts/StateContext";

// Initial State
import { initialState } from "./reducers/initialState";

// Reducers
import { rootReducer } from "./reducers";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={rootReducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
