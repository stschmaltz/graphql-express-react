const { authors } = require("../data");

class Author {
  static all() {
    return authors;
  }
}

module.exports = {
  Author,
};
