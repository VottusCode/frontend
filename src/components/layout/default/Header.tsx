import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { meQuery } from "../../../gql/queries";

export const Header = () => {
  const logout = () => {
    localStorage.removeItem("vottus_token");
    window.history.go();
  };

  const { data } = useQuery(meQuery);

  console.log("[Vottus GQL] This is me", data);

  return (
    <>
      <div className="vtts-header">
        <div className="container is-fluid">
          <div className="header-left">
            <a href="/">Vottus</a>
          </div>

          <div className="header-right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {data && data.me ? (
                <li>
                  <button className="button is-primary" onClick={logout}>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
