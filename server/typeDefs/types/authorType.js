const { gql } = require('apollo-server-express');

const authorType = gql`
  type Author {
    name: String
    books: [Book]
  }
`;

module.exports = {
  authorType
};
