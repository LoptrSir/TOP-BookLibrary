// ToP JS Course> Objects and Object constructors>  Book exercise // Aug 2023

// TO WORK ON: ReadBook button to display- ReadBook function- Delete function-  CSS Styling

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
  console.log("book-", this.info);
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

    console.log("abtl-", title, author, pages, readValue);

    displayLibrary();
  }
}

function displayLibrary() {
  const existingLibraries = document.querySelectorAll("div.library");
  existingLibraries.forEach((existingLibrary) => {
    existingLibrary.remove();
  });

  const libraryContainer = document.createElement("div");
  libraryContainer.className = "library";
  libraryContainer.innerText = "Library";

  myLibrary.forEach((book, index) => {
    // const bookDetails = document.createElement("p"); modifying below
    const bookDetails = document.createElement("div"); // do I need a class here for css styling, I assume yes.

    const delBook = document.createElement("button");
    delBook.innerText = "Delete Book";
    // insert eventListener here for click
  
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

    console.log("br-", book.read);
    bookDetails.appendChild(delBook);
    libraryContainer.appendChild(bookDetails);
  });

  document.body.appendChild(libraryContainer);
  console.log("dispL-"); //verifies function is being called
}
displayLibrary(); // needed to call hardcoded library

//function deleteBook(index) {}

function bookToRead(index) {
  myLibrary[index].read = true;
  console.log("brc-", myLibrary[index].read);
  displayLibrary();
  console.log("brc1-", myLibrary[index].read);
}
