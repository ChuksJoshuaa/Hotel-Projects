import { gql } from "@apollo/client";

export const DELETE_HOTEL_BRAND = gql`
  mutation DeleteBrand($id: Int!) {
    deleteBrand(id: $id)
  }
`;
