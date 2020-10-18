import React from "react";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

export const BlogLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const BlogLoader = () => (
  <BlogLoaderWrapper>
    <SyncLoader color="rgb(120, 0, 206)" size="20" />
  </BlogLoaderWrapper>
);

export const BlogWrapper = styled.div`
  display: flex;
  margin-top: 4rem;
  width: 100%;
`;
