class Book {

  constructor(title, genre, author, imgUrl, isRead=false) {
    this.title = title
    this.genre = genre
    this.author = author
    this.imgUrl = imgUrl
    this.isRead = isRead
  }

  getTitle = () => this.title
  getGenre = () => this.genre
  getAuthor = () => this.author
  getImgUrl = () => this.imgUrl
  getIsRead = () => this.isRead
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

  startReading = title => {
    this.currentlyReading = title
  }
  
  finishReading = title => {
    this.currentlyReading = null;
    this.lastRead = title 
  }

  getNumRead = () => {
    let read = 0
    this.books.forEach(book => book.getIsRead() && ++read)
    return read
  }

  getNumUnread = () => {
    let unread = 0
    this.books.forEach(book => !book.getIsRead() && ++unread)
    return unread
  }
}

// Create Initial Library
const homeLibrary = new BookList();

homeLibrary.add(new Book(
  'The Shining', 'Horror', 'Stephen King', 
  'the-shining.jpg'
));

homeLibrary.add(new Book(
  'American Gods', 'Fiction', 'Neil Gaiman', 
  'american-gods.jpg'
));

homeLibrary.add(new Book(
  'Eloquent JavaScript', 'Programming', 'Marijn Haverbeke',
  'eloquent-javascript.png', true
));

homeLibrary.add(new Book(
  'The Eyre Affair', 'Fantasy', 'Jasper Fforde',
  'the-eyre-affair.jpg'
));

homeLibrary.add(new Book(
  'The Revisionists', 'Science-fiction', 'thomas Mullen',
  'the-revisionists.jpg'
));

homeLibrary.add(new Book(
  'The Shining', 'Horror', 'Stephen King', 
  'the-shining.jpg'
));

homeLibrary.add(new Book(
  'The Eyre Affair', 'Fantasy', 'Jasper Fforde',
  'the-eyre-affair.jpg'
));

homeLibrary.add(new Book(
  'Eloquent JavaScript', 'Programming', 'Marijn Haverbeke',
  'eloquent-javascript.png', true
));

// Display Library
const librarySection = document.querySelector('.library-section')

for(let book of homeLibrary.books) {

  // Bootstrap Card Layout
  let card = document.createElement('div')
  card.classList = 'card'
  card.style.width = '18rem'

  let img = document.createElement('img')
  img.classList = 'card-img-top'
  img.src = `./assets/${book.getImgUrl()}`

  let cardBody = document.createElement('div')
  cardBody.classList = 'card-body'

  let cardTitle = document.createElement('h5')
  cardTitle.classList = 'card-title'
  cardTitle.innerText = book.getTitle()

  let cardText = document.createElement('p')
  cardText.classList = 'card-text'
  cardText.innerText = `${book.getTitle()} is a ${book.getGenre().toLowerCase()} book written by ${book.getAuthor()}.`

  let learnMoreBtn = document.createElement('a')
  learnMoreBtn.classList = 'btn btn-primary'
  learnMoreBtn.href = '#'
  learnMoreBtn.innerText = 'Learn more'

  card.appendChild(img)
  card.appendChild(cardBody)
  
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(learnMoreBtn)

  librarySection.appendChild(card)
}