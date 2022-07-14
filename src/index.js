import React from "react";
import { render } from "react-dom";
import { Provider } from "./context/context";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(
  <Provider>
    <App />
  </Provider>,
  root
);
