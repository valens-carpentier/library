const myLibrary = [
  new Book("Harry Potter", "JK Rowling", 345, true),
  new Book ("Le Seigneurs des Anneaux", "JRR Tolkien", 1000, true)
];

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = isRead;
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const isRead = document.querySelector("#isRead");
const form = document.querySelector('#form');
form.addEventListener('submit', addBookToLibrary)


function addBookToLibrary(event) {
    event.preventDefault();
    const newBook = new Book(title.value, author.value, numPages.value, isRead.checked);
    myLibrary.push(newBook);
    console.log(myLibrary);
    displayLibrary();
}

function displayLibrary() {
  
  const bookCardContainer = document.querySelector('.card-container');
  bookCardContainer.innerHTML = '';
  
  for (const book of myLibrary) {
    console.log(book.title, book.author, book.numPages, book.isRead);
    
    const bookCardContainer = document.querySelector('.card-container')
    
    const paraTitle = document.createElement("h4");
    const paraAuthor = document.createElement("p");
    const paraNumPages = document.createElement("p");
    const paraRead = document.createElement("p");

    paraTitle.textContent = "Title: ";
    paraAuthor.textContent = "Author: ";
    paraNumPages.textContent = "Pages: ";
    paraRead.textContent = "Read: ";
    
    bookCardContainer.appendChild(paraTitle);
    bookCardContainer.appendChild(paraAuthor);
    bookCardContainer.appendChild(paraNumPages);
    bookCardContainer.appendChild(paraRead);

    const bookTitle = document.createTextNode(book.title);
    paraTitle.appendChild(bookTitle);
    
    const bookAuthor = document.createTextNode(book.author);
    paraAuthor.appendChild(bookAuthor);

    const bookPages = document.createTextNode(book.numPages);
    paraNumPages.appendChild(bookPages);

    const bookRead = document.createTextNode(book.isRead);
    paraRead.appendChild(bookRead);
  }
}

displayLibrary();
