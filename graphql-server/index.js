const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers');

// var seedCards = require('./services/loadCards.js');

const GRAPHQL_PORT = 8080;
const typeDefs = Schema
const resolvers = Resolvers
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
// app.use('/seedCards', seedCards);

server.applyMiddleware({ app });

app.listen({ port: GRAPHQL_PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${GRAPHQL_PORT}${server.graphqlPath}`)
);
