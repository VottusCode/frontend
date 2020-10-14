import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/main.scss";
import Router from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
