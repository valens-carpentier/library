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
  return this.read ? 'Read' : 'To Read';
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
  
  myLibrary.forEach((book, index) => {
    
    const bookCardContainer = document.querySelector('.card-container')

    const cardDisplay = document.createElement("div");
    cardDisplay.classList.add('card');

    const paraTitle = document.createElement("h4");
    const paraAuthor = document.createElement("p");
    const paraNumPages = document.createElement("p");

    paraTitle.textContent = "Title: " + book.title;
    paraAuthor.textContent = "Author: " + book.author;
    paraNumPages.textContent = "Pages: " + book.numPages;
    
    cardDisplay.appendChild(paraTitle);
    cardDisplay.appendChild(paraAuthor);
    cardDisplay.appendChild(paraNumPages);

    const readStatusButton = document.createElement('button');
    readStatusButton.textContent = book.readStatus();
    readStatusButton.addEventListener('click', () => {
      book.toggleReadStatus();
      displayLibrary();
    });
    cardDisplay.appendChild(readStatusButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => {
      myLibrary.splice(index, 1);
      displayLibrary();
    });
    cardDisplay.appendChild(deleteButton);

    bookCardContainer.appendChild(cardDisplay);
  });
}

displayLibrary();

const modal = document.querySelector(".modal");
const btn = document.querySelector("#openModalBtn");
const span = document.querySelector(".close");
const submit = document.querySelector("input[type='submit']");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

submit.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
