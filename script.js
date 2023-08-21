// ToP JS Course> Objects and Object constructors>  Book exercise // Aug 2023

// TO WORK ON: Delete function-  

let myLibrary = [
  {
    title: "HardCode",
    author: "Sir Not Appearing",
    pages: "infinite",
    read: false,
  },
];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read.toLowerCase() === "y";
}

function addBookToLibrary() {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const readValue = readInput.value;

  if (title && author && pages && readValue) {
    const newBook = new book(title, author, pages, readValue);
    myLibrary.push(newBook);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
  displayLibrary();
  }
}

function displayLibrary() {
  const existingLibraries = document.querySelectorAll("div.library");
  existingLibraries.forEach((existingLibrary) => {
    existingLibrary.remove();
  });

  const libraryContainer = document.createElement("div");
  libraryContainer.classList.add('book');
  libraryContainer.className = "library";
  libraryContainer.innerText = "Library";

  myLibrary.forEach((book, index) => {
    const bookDetails = document.createElement("div"); // do I need a class here for css styling, I assume yes.

    const delBook = document.createElement("button");
    delBook.innerText = "Delete Book";
    // insert eventListener here for click
    delBook.addEventListener('click', () => {
      deleteBook(index)
    });
  
    bookDetails.textContent = `${book.title} by ${book.author}, ${
      book.pages
    } pages, ${book.read ? "this book is read." : "this book is unread."}`;

    const readBook = document.createElement("button");
    readBook.innerText = "Read Book";
    readBook.addEventListener("click", () => {
      bookToRead(index)
    });
    if (!book.read) {
      bookDetails.appendChild(readBook);
    }

    bookDetails.appendChild(delBook);
    libraryContainer.appendChild(bookDetails);
  });

  document.body.appendChild(libraryContainer);
}

displayLibrary(); // needed to call hardcoded library

function deleteBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

function bookToRead(index) {
  myLibrary[index].read = true;
  console.log("brc-", myLibrary[index].read);
  displayLibrary();
  console.log("brc1-", myLibrary[index].read);
}
