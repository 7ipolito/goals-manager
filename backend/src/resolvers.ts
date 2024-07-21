import { hash } from 'bcryptjs';
import { IResolvers } from '@graphql-tools/utils';
import { Goal } from './entity/Goal';
import { Task } from './entity/Task';
import { CreateTask, TaskStatus } from './interface/ICreateTask';
import {CreateGoal as CreateGoalProps} from './interface/ICreateGoal'
import { ChangeTask } from './interface/IChangeTask';
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
    CreateGoal: async (_,args: CreateGoalProps): Promise<boolean> => {
      const { goalName, statusGoal} = args;
      const goal = await Goal.create({
        name:goalName,
        status:statusGoal,
       
      }as any);
      
      await goal.save()
      
      return true;

    },
    CreateTask: async (_,args: CreateTask): Promise<boolean> => {
      const { taskName, goalId, statusTask } = args;
      const goal = await Task.create({
        name:taskName,
        goalId:goalId,
        status:statusTask,
       
      }as any);
      
      await goal.save()
      
      return true;

    },
    CompleteTask: async(_,args: ChangeTask):Promise<boolean> =>{
      const {taskId} = args;
      console.log(taskId)

      const [affectedRows] = await Task.update({status:TaskStatus.DONE}, {
        where: {
          id: taskId
        }
      });
      
      if (affectedRows > 0) {
        console.log('User updated');
        return true
      } else {
        console.log('Dont have users');
        return false
      }      
     },
     IncompleteTask: async(_,args: ChangeTask):Promise<boolean> =>{
      const {taskId} = args;
      console.log(taskId)

      const [affectedRows] = await Task.update({status:TaskStatus.TODO}, {
        where: {
          id: taskId
        }
      });
      
      if (affectedRows > 0) {
        console.log('User updated');
        return true
      } else {
        console.log('Dont have users');
        return false
      }      
     }

  },
};