const { gql } = require("apollo-server");

const query = gql`
  type Query {
    books: [Book]
    authors: [Author]
  }
`;

module.exports = {
  query,
};
