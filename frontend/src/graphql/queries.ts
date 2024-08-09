import { gql } from "@apollo/client";

export const GET_GOALS = gql`
  query getAllGoals {
    goals {
      id
      name
      status
      tasks {
        id
        name
        status
      }
    }
  }
`;

export const GET_GOALS_COMPLETE = gql`
  query getAllGoalsComplete {
    goalsComplete {
      id
      name
      status
      tasks {
        id
        name
        status
      }
    }
  }
`;