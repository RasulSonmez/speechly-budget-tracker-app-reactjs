import React from "react";
import { render } from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(
  <SpeechProvider appId="8e51debf-1ea8-49ae-b5e3-43304d647fb0" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  root
);
