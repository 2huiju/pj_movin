import { gql } from "@apollo/client";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      userPoint {
        amount
      }
    }
  }
`;
