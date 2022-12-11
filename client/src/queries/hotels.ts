import { gql } from "@apollo/client";

export const GET_HOTELS = gql`
  query Hotels {
    hotels {
      id
      name
      description
      image
      price
      city
      address
      country
      brandName
      authorId
      createdAt
      updatedAt
    }
  }
`;
