import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import BlogPage from "../pages/blog";

import IndexPage from "../pages/index";
import LoginPage from "../pages/login";
import { RegisterPage } from "../pages/register";

const routes: RouteProps[] = [
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
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
