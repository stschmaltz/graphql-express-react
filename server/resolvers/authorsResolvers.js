const { Author } = require("../models");

const authorsResolvers = {
  Query: {
    authors: () => Author.all()
  },
};

module.exports = {
  authorsResolvers,
}
