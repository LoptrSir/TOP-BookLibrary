// ToP JS Course> Objects and Object constructors>  Book exercise //

// 8/7/23 this iteration works. No CSS done yet. Correct LibraryDisplay to only add new book not generate a completely new display.  Read y/n does'nt update to has read/has not read.

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read.toLowerCase() === "y"; // Modify this to reject !y/n input
  this.info = `${title} by ${author}, ${pages} pages, ${
    this.read ? "this book is read." : "this book is unread."
  }`;

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
    // clear Input.value here or clear from page reset button?
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    console.log("abtl-", title, author, pages, readValue);

    displayLibrary();
  }
}

// SUGGESTED CODE2 BEGIN
function displayLibrary() {
  // Remove any existing library containers
  const existingLibraries = document.querySelectorAll("div.library");
  existingLibraries.forEach(existingLibrary => {
    existingLibrary.remove();
  });

  // Create a new library container
  const libraryContainer = document.createElement("div");
  libraryContainer.className = "library"; // Apply the class "library"
  libraryContainer.innerHTML = "<h3>Library</h3>";

  // Populate the new library container with book details
  myLibrary.forEach((book, index) => {
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.info}`;
    libraryContainer.appendChild(bookDetails);
  });

  // Append the new library container to the DOM
  document.body.appendChild(libraryContainer);
}
// SUGGESTED CODE2 END


// // suggested code1 Begin:
// function displayLibrary() {
//   // Clear previous library container content
//   const existingLibrary = document.querySelector("div.library");
//   if (existingLibrary) {
//     existingLibrary.innerHTML = ''; // Clear the content of the existing library
//   }

//   // Create a new library container
//   const libraryContainer = document.createElement("div");
//   libraryContainer.innerHTML = "<h3>Library</h3>";

//   // Populate the new library container with book details
//   myLibrary.forEach((book, index) => {
//     const bookDetails = document.createElement("p");
//     bookDetails.textContent = `Book ${index + 1}: Title- ${
//       book.title
//     }, Author- ${book.author}, Pages- ${book.pages}, Read- ${book.read}`;
//     libraryContainer.appendChild(bookDetails);
//   });

//   // Append the new library container to the DOM
//   if (existingLibrary) {
//     existingLibrary.appendChild(libraryContainer);
//   } else {
//     document.body.appendChild(libraryContainer);
//   }
// }
// // SUGGESTED CODE1 END:

// // Original code block Begin
// const libraryContainer = document.createElement("div");
//  libraryContainer.innerHTML = "<h3>Library</h3>";
// function displayLibrary() {
//   myLibrary.forEach((book, index) => {
//    const bookContainer = document.createElement("div");
//    const bookDetails = document.createElement("p");
//    bookDetails.textContent = `${book.info}`;

//    bookContainer.appendChild(bookDetails);
//    //  bookContainer.appendChild(deleteButton);
//    //  bookContainer.appendChild(ToggleReadButton);  //only visible if read == n
//    libraryContainer.appendChild(bookContainer);
//   });
//   const existingLibrary = document.querySelector("div.library");
//   if (existingLibrary) {
//    // append only next book to existing display
//    existingLibrary.replaceWith(libraryContainer);
//    //existingLibrary.appendChild(libraryContainer);  // doesn't stop recreation of entire library
//   } else {
//    document.body.appendChild(libraryContainer);
//   }
// }
// //Original code block End
