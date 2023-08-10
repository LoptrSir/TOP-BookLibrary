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
  const title = titleInput.value;     // * this section can be cleaned up with a .map() section
  const author = authorInput.value;   //*
  const pages = pagesInput.value;     //*
  const readValue = readInput.value;  //*

  if (title && author && pages && readValue) {
    const newBook = new book(title, author, pages, readValue);
    myLibrary.push(newBook);
    titleInput.value = "";            //*
    authorInput.value = "";           //*
    pagesInput.value = "";            //*
    readInput.value = "";             //*  see below;
    // 
    //             //           const inputElements = [
    //     document.getElementById("title"),
    //     document.getElementById("author"),
    //     document.getElementById("pages"),
    //     document.getElementById("read"),
    //             //            ];
    
    //   const values = inputElements.map((input) => {
    //     const value = input.value;
    //     input.value = ""; // Clear the input value
    //     return value;
    //   });
    
    //   const [title, author, pages, readValue] = values;


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
    // if (book.read === false) { modify below
    bookDetails.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "this book is read." : "this book is unread."}`;

    if (!book.read) {
      const readBook = document.createElement("button");
      readBook.innerText = "Read Book";
      // insert addEventListener here
      bookDetails.appendChild(readBook);
    }
    console.log("br-", book.read);

    // bookDetails.textContent = // `${book.info}`; //Modified below
    //bookDetails.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "this book is read." : "this book is unread."}`;

    bookDetails.appendChild(delBook);
    libraryContainer.appendChild(bookDetails);
  });

  document.body.appendChild(libraryContainer);
}
displayLibrary(); // needed to call hardcoded library

//function deleteBook(index) { }
// function bookToRead(){ }
