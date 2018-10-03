const Card = require('../models/cards.js');

const resolveFunctions = {
  RootQuery: {
    card(_, { name }){
      let where = { name };
      return Card.find({ where });
    }
  },
  RootMutation: {
    createCard: (root, args) => { return Card.create(args); },
  }
}

module.exports = resolveFunctions;
