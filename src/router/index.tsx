import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import BlogPage from "../pages/blog";

import IndexPage from "../pages/index";

const routes: RouteProps[] = [
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/",
    component: IndexPage,
  },
];

export default () => (
  <Router>
    <Switch>
      {routes.map((route, key) => (
        <Route {...route} key={key} />
      ))}
    </Switch>
  </Router>
);
