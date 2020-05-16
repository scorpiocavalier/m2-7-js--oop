// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - books (empty array)
//      - reference to last book read (null for now)
//      - reference to book currently reading (null for now)
//
// Then intantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
  constructor() {
    this.books = [];
    this.currentlyReading = null;
    this.lastRead = null;
  }
}

const homeLibrary = new BookList();

console.log(homeLibrary);
