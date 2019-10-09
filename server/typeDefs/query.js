const { gql } = require("apollo-server-express");

gql`
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const query = gql`
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

module.exports = {
  query
};
