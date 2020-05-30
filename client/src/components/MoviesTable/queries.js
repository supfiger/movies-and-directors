import { gql } from "apollo-boost";

export const moviesQuery = gql`
  query moviesQuery {
    movies {
      director {
        name
      }
      id
      name
      genre
      watched
      rate
    }
  }
`;
