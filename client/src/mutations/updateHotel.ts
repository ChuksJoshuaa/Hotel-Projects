import { gql } from "@apollo/client";

export const UPDATE_HOTEL = gql`
  mutation UpdateHotel(
    $id: Int!
    $name: String!
    $description: String!
    $brandName: String!
    $address: String!
    $city: String!
    $image: String!
    $country: String!
    $price: Int!
  ) {
    updateHotel(
      id: $id
      name: $name
      description: $description
      brandName: $brandName
      address: $address
      city: $city
      image: $image
      country: $country
      price: $price
    ) {
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
    }
  }
`;
