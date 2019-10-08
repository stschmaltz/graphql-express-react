const { booksResolvers } = require('./booksResolvers');
const { authorsResolvers } = require('./authorsResolvers');

const resolvers = [booksResolvers, authorsResolvers];

module.exports = {
  resolvers,
};
