const typeDefinitions = `
type Card {
  id: Int! # the ! means that every author object _must_ have an id
  name: String
  names: [ String ]
  layout: String
  manaCost: String
  cmc: Int
  colors: [ String ]
  colorIdentity: [ String ]
  type: String
  supertypes: [ String ]
  types: [ String ]
  subtypes: [ String ]
  text: String
  power: String
  toughness: String
  loyalty: Int
  imageName: String
}
# the schema allows the following two queries:
type RootQuery {
  card(name: String, type: String): Card
}
# this schema allows the following two mutations:
type RootMutation {
  createCard(
    name: String!
    type: String!
  ): Card
}
# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: RootQuery
  mutation: RootMutation
}
`;

module.exports = typeDefinitions;
