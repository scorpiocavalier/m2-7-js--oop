// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead=false) {
    this.title = title
    this.genre = genre
    this.author = author
    this.isRead = isRead
  }
}

const book1 = new Book('Beautiful Disaster', 'Romance', 'Jamie McGuire', false)
const book2 = new Book('Divergent', 'Science Fiction', 'Veronica Roth', true)
const book3 = new Book('The Hunger Games', 'Science Fiction', 'Suzanne Collins')
const book4 = new Book('The Chronicles of Narnia', 'Fantasy', 'C.S. Lewis')
const book5 = new Book('The WAy of Kings', 'Fantasy', 'Brandon Sanderson', true)

console.log(JSON.stringify(book1, null, 2));
console.log(JSON.stringify(book2, null, 2));
console.log(JSON.stringify(book3, null, 2));
console.log(JSON.stringify(book4, null, 2));
console.log(JSON.stringify(book5, null, 2));