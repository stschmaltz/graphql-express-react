const { books } = require("../data");

class Book {
  static all() {
    return books;
  }
  static booksByAuthor(author) {
    return books.filter(book => book.author.name === author.name)
  }
}

module.exports = {
  Book
};
