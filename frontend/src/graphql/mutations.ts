import { gql } from "@apollo/client";

export const CREATE_GOAL = gql`
  mutation CreateGoal($goalName: String!, $statusGoal: String!){
  CreateGoal(goalName: $goalName, statusGoal: $statusGoal)
}
`;

export const CREATE_TASK = gql`
 mutation CreateTask($taskName: String!, $goalId: String!, $statusTask: String!){
  CreateTask(taskName: $taskName, goalId: $goalId, statusTask: $statusTask)
}
`;


export const COMPLETE_TASK = gql`
  mutation CompleteTask($taskId: String!) {
    CompleteTask(taskId: $taskId)
  }
`;

export const INCOMPLETE_TASK = gql`
  mutation IncompleteTask($taskId: String!) {
    IncompleteTask(taskId: $taskId)
  }
`;