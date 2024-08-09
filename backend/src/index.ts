import { ApolloServer } from 'apollo-server';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from 'node:path';
import { resolvers } from './resolvers';
import { initializeDatabase } from './config/database';

async function startServer() {
  try {
    await initializeDatabase();

    const typeDefs = loadSchemaSync(join(__dirname, 'schema.graphql'), {
      loaders: [new GraphQLFileLoader()],
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
     
    });

    const { url } = await server.listen({ port: 4000 });

    console.info(`Server is running on ${url}`);
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();