import { Goal } from '../entity/Goal';
import { Task } from '../entity/Task';
import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  dialect: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '', 
  database: 'goals_manager',
  models: [Task, Goal], 
  logging: false, 
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