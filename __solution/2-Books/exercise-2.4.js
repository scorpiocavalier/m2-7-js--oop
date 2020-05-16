// From 2.3
// Copy over all of the code from 2.3...
class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

class BookList {
  constructor() {
    this.books = [];
    this.currentlyReading = null;
    this.lastRead = null;
  }

  add = (book) => {
    this.books.push(book);

    if (!this.currentlyReading) {
      this.currentlyReading = book;
    }
  };

  getNumUnread = () => {
    let numUnread = 0;
    this.books.forEach((book) => {
      if (book.isRead === false) {
        numUnread++;
      }
    });

    return numUnread;
  };

  getNumRead = () => {
    let numRead = 0;
    this.books.forEach((book) => {
      if (book.isRead === true) {
        numRead++;
      }
    });

    return numRead;
  };

  startReading = (title) => {
    const book = this.books.find((book) => book.title === title);

    this.currentlyReading = book;
  };

  finishReading = (title) => {
    const book = this.books.find((book) => book.title === title);
    this.lastRead = book;
    this.currentlyReading = null;

    book.isRead = true;
  };
}

const homeLibrary = new BookList();

homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
homeLibrary.add(new Book('American Gods', 'Fiction', 'Neil Gaiman'));
homeLibrary.add(
  new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke', true)
);
homeLibrary.add(new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde'));
homeLibrary.add(
  new Book('The Revisionists', 'Science-fiction', 'thomas Mullen')
);

console.log('initial state', homeLibrary.currentlyReading); // should be The Shining book object
console.log('initial last-read', homeLibrary.lastRead); // should be null

homeLibrary.finishReading('The Shining');
console.log(
  'Currently reading, after finishing The Shining',
  homeLibrary.currentlyReading
); // should be null
console.log('Last-read, after finishing The Shining', homeLibrary.lastRead); // should be The Shining

homeLibrary.startReading('The Revisionists');
console.log(
  'Currentky reading, After starting The Revisionists',
  homeLibrary.currentlyReading
); // should be The Revisionists book
