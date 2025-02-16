const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');  // Import schema
const resolvers = require('./resolvers');  // Import resolvers

const app = express();

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
