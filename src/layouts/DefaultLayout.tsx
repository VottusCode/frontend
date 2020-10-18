import React from "react";
import styled from "styled-components";
import Header from "../components/layout/default/Header";
import FooterConsole from "../components/layout/FooterConsole";

export const FooterConsoleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: rgba(255, 255, 255, 0.08);
`;

export const DefaultLayout: React.FC = ({ children }) => {
  if (!document.body.classList.contains("has-bg"))
    document.body.classList.add("has-bg");

  return (
    <div>
      <Header />
      <div className="default-content-wrapper">{children}</div>
      <FooterConsoleWrapper>
        <FooterConsole />
      </FooterConsoleWrapper>
    </div>
  );
};
