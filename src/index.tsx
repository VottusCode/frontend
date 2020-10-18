import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/main.scss";
import Router from "./router";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/graphql"
      : "https://gql.vott.us/graphql",
  cache: new InMemoryCache(),
});

export const ReactRoot: React.FC = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>
);

ReactDOM.render(<ReactRoot />, document.getElementById("root"));
