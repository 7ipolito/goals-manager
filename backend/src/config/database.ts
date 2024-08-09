import pg from 'pg';
import { Goal } from '../entity/Goal';
import { Task } from '../entity/Task';
import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
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