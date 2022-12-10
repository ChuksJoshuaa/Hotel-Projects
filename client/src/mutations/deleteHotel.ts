import { gql } from "@apollo/client";

export const DELETE_HOTEL = gql`
  mutation DeleteHotel($id: Int!) {
    deleteHotel(id: $id)
  }
`;
