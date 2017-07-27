import {
  addMockFunctionsToSchema,
  makeExecutableSchema,
} from 'graphql-tools';
import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Author {
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  title: String
  text: String
  author: Author
}
type Link {
  id: ID!
  url: String!
  description: String!
}
type Query {
  author(firstName: String, lastName: String): Author
  allLinks: [Link!]!
}
type Mutation {
  createLink(url: String!, description: String!): Link
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, mocks });

export default schema;
