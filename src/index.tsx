import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/main.scss";
import Router from "./router";

export const ReactRoot: React.FC = () => (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
