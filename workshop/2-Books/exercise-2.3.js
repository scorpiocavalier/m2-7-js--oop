// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2.
// Paste them right here:

// Exercise 2.3
//
// We want to be able to add books to our BookList, so that we can start a
// collection!
//
// Let's create an `add` method in our BookList class. It should take a book
// as a parameter. When we call `.add`, it should push that new book into the
// `books` array on the `BookList` class. Also, if no Book is being currently read
// we should set currentlyReading to point to this newly added Book.
//
// Books have an `isRead` property, to indicate if we've read it or not.
// Let's also add two new methods:
// - getNumRead
// - getNumUnread
//
// These methods should return the number of books which are read and unread,
// respectively.
//
// The following code will fail by default. Your goal is to get it to run, and output the values specified at the end:

class Book {
  constructor(title, genre, author, isRead=false) {
    this.title = title
    this.genre = genre
    this.author = author
    this.isRead = isRead
  }
}

class BookList {
  constructor() {
    this.books = []
    this.lastRead = null
    this.currentlyReading = null
  }

  add = book => {
    this.books.push(book)
    this.currentlyReading === null && (this.currentlyReading = book)
  }

  getNumRead = () => {
    let read = 0
    this.books.forEach(book => book.isRead && ++read)
    return read
  }

  getNumUnread = () => {
    let unread = 0
    this.books.forEach(book => !book.isRead && ++unread)
    return unread
  }
}

const homeLibrary = new BookList()
homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true));

console.log(JSON.stringify(homeLibrary, null, 2));
console.log('Unread:', JSON.stringify(homeLibrary.getNumUnread(), null, 2)); // 2
console.log('Read:', JSON.stringify(homeLibrary.getNumRead(), null, 2)); // 1