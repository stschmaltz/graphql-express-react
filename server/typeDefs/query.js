const { gql } = require("apollo-server-express");

const query = gql`
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

module.exports = {
  query
};
