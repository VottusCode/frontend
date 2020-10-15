import React from "react";
import Header from "../components/layout/default/Header";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      {children}
    </div>
  );
};
