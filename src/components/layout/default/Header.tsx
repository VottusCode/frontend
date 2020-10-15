import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
