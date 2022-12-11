import { gql } from "@apollo/client";

export const CREATE_HOTEL_BRAND = gql`
  mutation CreateBrand($input: BrandInput!) {
    createBrand(input: $input) {
      id
      name
      authorId
      createdAt
      updatedAt
    }
  }
`;
