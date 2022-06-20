import { gql } from "@apollo/client"

export const ADD_USER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    AddUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`
