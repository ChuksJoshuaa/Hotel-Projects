import { gql } from "@apollo/client";

export const FILTERED_HOTELS = gql`
  query FilterHotels($brandId: Int!) {
    filterHotels(brandId: $brandId) {
      id
      name
      descriptionSnippet
      image
      price
      city
      address
      country
      brandId
      authorId
      createdAt
      updatedAt
      brandId
    }
  }
`;
