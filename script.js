const myLibrary = [
  new Book("Harry Potter", "JK Rowling", 345, true)
];

/*
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#numPages");
const isRead = document.querySelector("#read");
const form = document.querySelector('#form');
form.addEventListener('submit', addBookToLibrary);
*/

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.isRead = false;
}


function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, numPages.value, isRead.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayLibrary() {

}

addBookToLibrary();

console.log(myLibrary);




/*  
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info()); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
*/
