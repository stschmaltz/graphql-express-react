const { query } = require("./query");
const { bookType, authorType } = require("./types");

const typeDefs = [query, bookType, authorType];

module.exports = {
  typeDefs
};
