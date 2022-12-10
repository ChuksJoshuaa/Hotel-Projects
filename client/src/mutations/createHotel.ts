import { gql } from "@apollo/client";

export const CREATE_HOTEL = gql`
  mutation CreateHotel($input: HotelInput!) {
    createHotel(input: $input) {
      id
      name
      description
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
