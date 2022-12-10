import { gql } from "@apollo/client";

export const DELETE_HOTEL = gql`
  mutation DeleteHotel {
    deleteHotel
  }
`;
