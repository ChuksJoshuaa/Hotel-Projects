import { gql } from "@apollo/client";

export const GET_HOTEL_BRANDS = gql`
  query Brands {
    brands {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
