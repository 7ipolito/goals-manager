import { hash } from 'bcryptjs';
import { IResolvers } from '@graphql-tools/utils';
import { Goal } from './entity/Goal';
import { TaskStatus, Task } from './entity/Task';

interface RegisterGoal {
    goalName:string;
    statusGoal:string
}

interface RegisterTask {
  taskName:string;
  goalId:string;
  statusTask:TaskStatus;
}

export const resolvers: IResolvers = {
  Query: {
    goals: async (parent, args,) => {
    
      return await Goal.findAll();
    },
    goal: async (parent, { id },) => {
     
      return await Goal.findByPk(id);
    }
  },
  Goal: {
    tasks: async (goal, args,) => {
    
      return await Task.findAll({ where: { goalId: goal.id } });
    }
  },
  Mutation: {
    registerGoal: async (_: any, args: RegisterGoal): Promise<boolean> => {
      const { goalName, statusGoal} = args;
      const goal = await Goal.create({
        name:goalName,
        status:statusGoal,
       
      }as any);
      
      await goal.save()
      
      return true;

    },

    registerTask: async (_: any, args: RegisterTask): Promise<boolean> => {
      const { taskName, goalId, statusTask } = args;
      const goal = await Task.create({
        name:taskName,
        goalId:goalId,
        status:statusTask,
       
      }as any);
      
      await goal.save()
      
      return true;

    },
  },
};