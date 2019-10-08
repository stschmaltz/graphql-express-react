const { gql } = require("apollo-server");

const authorType = gql`
  type Author {
    name: String
    books: [Book]
  }
`;

module.exports = {
  authorType
};
