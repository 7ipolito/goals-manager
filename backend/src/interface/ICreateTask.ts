export interface CreateTask {
  taskName:string;
  goalId:string;
  statusTask:TaskStatus;
}

export enum TaskStatus {
  DONE = 'DONE',
  TODO = 'TODO',
}