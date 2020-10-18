import { gql } from "@apollo/client";

export const blogPostsQuery = (page: number) => gql`
  query {
    posts(page: ${page}) {
      id
      slug
      title
      content
    }
  }
`;
