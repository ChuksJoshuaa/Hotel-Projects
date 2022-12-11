import { gql } from "@apollo/client";

export const SINGLE_BRAND = gql`
  query Brand($id: Int!) {
    brand(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
