const { gql } = require('apollo-server-express');

const bookType = gql`
  type Book {
    title: String
    author: Author
  }
`;

module.exports = {
  bookType,
};
