const express = require('express');
const { apolloServer } = require('graphql-tools');
const Schema = require('./data/schema');
const Resolvers = require('./data/resolvers');

// var seedCards = require('./services/loadCards.js');

const GRAPHQL_PORT = 8080;

var graphQLServer = express();
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
  //mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

// graphQLServer.use('/seedCards', seedCards);
