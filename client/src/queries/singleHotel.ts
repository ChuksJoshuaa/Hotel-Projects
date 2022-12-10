import { gql } from "@apollo/client";

export const SINGLE_HOTEL = gql`
  query Hotel($id: Int!) {
    hotel(id: $id) {
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
