import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    register(
      options: { email: $email, username: $username, password: $password }
    ) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
