import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./assets/scss/main.scss";
import UserContext from "./context/UserContext";
import { meQuery } from "./gql/queries";
import Router from "./router";

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/graphql"
      : "https://gql.vott.us/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("vottus_token");

  return {
    headers: token
      ? {
          ...headers,
          authorization: `Bearer ${token}`,
        }
      : headers,
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ReactRoot: React.FC = () => {
  const [userContext, setUserContext] = useState({
    authenticated: false,
    user: null,
  });

  /**
   * TODO: fetch user information
   */

  // const [executeMe, { data, error }] = useLazyQuery(meQuery);

  // const fetch = async () => {
  //   try {
  //     executeMe();
  //     if (error) return console.log(error);
  //     if (data === null) return;

  //     setUserContext({ authenticated: true, user: data });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // fetch();

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <UserContext.Provider value={userContext}>
          <Router />
        </UserContext.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
};
ReactDOM.render(<ReactRoot />, document.getElementById("root"));
