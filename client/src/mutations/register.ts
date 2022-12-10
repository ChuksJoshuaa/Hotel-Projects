import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($options: UserPasswordInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
    }
  }
`;
