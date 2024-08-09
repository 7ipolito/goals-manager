
# Project Goals Manager
<img src="https://github.com/user-attachments/assets/536d2697-ce6b-460f-b7d6-65cd2128a995" width="200px"/>

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/Abo1zu?referralCode=alphasec)

Welcome to goals-manager repository 🎯 

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)
  
## Introduction

This application was created by me Allan Hipólito. Basicaly it`s a project have my goals in this year, you can create a goal, create a task relationed with certain goal, you can complete or imcomplete the tasks and these changes will appear in screen

## Technologies Used
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E434AA?style=for-the-badge&logo=graphql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Apollo Client](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![NodeJs](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Ant Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)
![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

### Frontend

- **Next.js**: A React framework for building modern web applications that provides server-side rendering and static site generation for optimized performance and a better development experience.
- **Apollo Client**: A library for managing and optimizing data state and interactions with GraphQL APIs, offering data caching, real-time updates, and easy integration with React and other libraries.
- **Ant Design**: A UI design system for React that provides a collection of pre-built components aiming to create rich and consistent user interfaces with an elegant design and a set of design patterns.
- **TailwindCSS**: A utility-first CSS framework that enables rapid styling of websites with classes like `flex`, `pt-4`, and `text-center`, offering full control over layout and appearance without leaving your HTML.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Sequelize**: An ORM (Object-Relational Mapping) for Node.js that simplifies interaction with SQL databases like PostgreSQL, MySQL, and SQLite, allowing intuitive data modeling and query execution.
- **GraphQL**: A query language for APIs that allows you to request exactly the data you need and nothing more, simplifying the communication between client and server and providing a flexible and efficient way to manage data.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **TypeScript**: Brings static typing to JavaScript, ensuring a more predictable runtime behavior.
- **Jest**: Used for writing unit and integration tests for the backend.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## Configure the enviroment variables
- It is necessary to configure the database, i recommend you use [Supabase](https://supabase.com/) it will appear same like this `postgresql://postgres.[YOUR-USER]:[YOUR-PASSWORD][YOUR-URL]:6543/postgres`
- After you will put you key in .env following the model in .env.example


## Installation


Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/7ipolito/goals-manager.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd goals-manager
   ```

3. **Install the dependencies**:

   - For install both dependecies run:
   
   ```bash
   npm install
   ```

## Running the Application

- **To run the frontend**:

  ```bash
  npm run start-frontend
  ```

  This starts the React application on `http://localhost:5173` (or another available port).

- **To run the backend**:

  ```bash
  npm run start-backend
  ```

  This initializes the Express server, typically on `http://localhost:4000`.

- **To run both simultaneously**:

  ```bash
  npm run start
  ```

  This will invoke `concurrently` to start both the front and back ends.

Ensure that the frontend and backend are configured to run on separate ports to avoid conflicts.

## Conclusion

I hope that you to enjoy this project, he was developed using graphql that is awesome way to work faster and easy and also with Ant Design gathering this two fantastic libraries.

---
