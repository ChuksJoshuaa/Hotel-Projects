import { gql } from "@apollo/client";

export const GET_HOTELS = gql`
  query Hotels {
    hotels {
      id
      name
      descriptionSnippet
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
