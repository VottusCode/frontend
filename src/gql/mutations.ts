import { gql } from "@apollo/client";

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export type LoginMutationData = {
  login: {
    token: string;
  };
};

export const registerMutation = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password)
  }
`;
