const myLibrary = [
  new Book("Harry Potter", "JK Rowling", 345, true),
  new Book ("Le Seigneurs des Anneaux", "JRR Tolkien", 1000, true)
];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

Book.prototype.readStatus = function() {
  return this.read ? 'read' : 'not read yet';
};

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

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
    
    const bookCardContainer = document.querySelector('.card-container')

    const cardDisplay = document.createElement("div");
    cardDisplay.classList.add('card');
    const paraTitle = document.createElement("h4");
    const paraAuthor = document.createElement("p");
    const paraNumPages = document.createElement("p");
    const paraRead = document.createElement("p");

    paraTitle.textContent = "Title: ";
    paraAuthor.textContent = "Author: ";
    paraNumPages.textContent = "Pages: ";
    paraRead.textContent = "Read: ";
    
    cardDisplay.appendChild(paraTitle);
    cardDisplay.appendChild(paraAuthor);
    cardDisplay.appendChild(paraNumPages);
    cardDisplay.appendChild(paraRead);

    bookCardContainer.appendChild(cardDisplay);

    const bookTitle = document.createTextNode(book.title);
    paraTitle.appendChild(bookTitle);
    
    const bookAuthor = document.createTextNode(book.author);
    paraAuthor.appendChild(bookAuthor);

    const bookPages = document.createTextNode(book.numPages);
    paraNumPages.appendChild(bookPages);

    const bookRead = document.createTextNode(book.read);
    paraRead.appendChild(bookRead);
  }
  
  removeBook();
  changeStatus();
}

function removeBook() {
  const bookContainers = document.querySelectorAll(".card"); 
  
  bookContainers.forEach((bookContainer) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    bookContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      const index = bookContainer.getAttribute('data-index');
      myLibrary.splice(index, 1); 
      displayLibrary();
    });
  });
}

function changeStatus() {
  const bookContainers = document.querySelectorAll(".card"); 
  
  bookContainers.forEach((bookContainer, index) => {
    const readStatusButton = document.createElement('button');
    
    readStatusButton.textContent = myLibrary[index].readStatus();
    
    bookContainer.appendChild(readStatusButton);

    readStatusButton.addEventListener ('click', () => {
      myLibrary[index].toggleReadStatus();
      readStatusButton.textContent = myLibrary[index].readStatus();
    });

  });
};

displayLibrary();
