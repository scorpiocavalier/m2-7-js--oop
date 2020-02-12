// Exercise 2.2
// ------------
// Create a BookList class that has the following properties:
//      - booksread (0 to start)
//      - bookUnread (0 start)
//      - books (empty array)
//      - reference to last book read (null for now)
//      - reference to book currently reading (null for now)
//      - reference to book that is upNext (null for now)
//
// Then intantiate it once as 'homeLibrary'

// Console.log(homeLibrary) to verify that all is working.

class BookList {
    constructor() {
        this.read = 0;
        this.unread = 0;
        this.upNext = null;
        this.currentlyReading = null;
        this.lastRead = null;
        this.books = []
    }
}

const homeLibrary = new BookList();

console.log(homeLibrary);