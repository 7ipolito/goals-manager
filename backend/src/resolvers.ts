import { hash } from 'bcryptjs';
import { IResolvers } from '@graphql-tools/utils';
import { Goal } from './entity/Goal';
import { TaskStatus, Task } from './entity/Task';

interface RegisterGoal {
    goalName:string;
    status:string
}

interface RegisterTask {
  taskName:string;
  goal:Goal;
  status:TaskStatus;
}

export const resolvers: IResolvers = {
  Query: {
    goals: async (): Promise<Goal[]> => {
      try {

        const users = await Goal.findAll();
        return users;
      } catch (error) {
        console.error('Error fetching goals:', error);
        throw new Error('Failed to fetch goals');
      }
    },
  },
  Mutation: {
    registerGoal: async (_: any, args: RegisterGoal): Promise<boolean> => {
      const { goalName, status } = args;
      const goal = await Goal.create({
        name:goalName,
        status:status,
       
      }as any);
      
      await goal.save()
      
      return true;

    },
  },
};