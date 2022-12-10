import { gql } from "@apollo/client";

export const UPDATE_HOTEL_BRAND = gql`
  mutation UpdateBrand($id: Int!, $name: String!) {
    updateBrand(id: $id, name: $name) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
