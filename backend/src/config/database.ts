import pg from 'pg';
import { Goal } from '../entity/Goal';
import { Task } from '../entity/Task';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('postgresql://postgres.sznkmulqwxypjgrvnelq:JVaGe36SM0uXXWQo@aws-0-us-east-1.pooler.supabase.com:6543/postgres', {
  dialect: 'postgres',
  dialectModule: pg,
  logging: true,
  
  models: [Task, Goal],
});

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connection has been established successfully.');

    await sequelize.sync({ alter: true }); 
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, initializeDatabase };