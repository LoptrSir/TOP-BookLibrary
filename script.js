// ToP JS Course> Objects and Object constructors>  Book exercise //

// 8/7/23 this iteration works. No CSS done yet. Correct LibraryDisplay to only add new book not generate a completely new display.  Read y/n does'nt update to has read/has not read.

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // Modify this to a boolean?
  if (read == "y") {
    read = "book has been read.";
  } else {
    read = "not read yet.";
  }
  this.info = title + " by " + author + ", " + pages + " pages, " + read;

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
  const read = readInput.value;

  if (title && author && pages && read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    // clear Input.value here or clear from page reset button?
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    console.log("abtl-", title, author, pages, read);

    displayLibrary();
  }
}

function displayLibrary() {
  const libraryContainer = document.createElement("div");
  libraryContainer.innerHTML = "<h3>Library</h3>";

  myLibrary.forEach((book, index) => {
    const bookDetails = document.createElement("p");
    bookDetails.textContent = `Book ${index + 1}: Title- ${
      book.title
    }, Author- ${book.author}, Pages- ${book.pages}, Read- ${book.read}`;
    libraryContainer.appendChild(bookDetails);
  });
  const existingLibrary = document.querySelector("#library-container");
  if (existingLibrary) {
    existingLibrary.replaceWith(libraryContainer);
  } else {
    document.body.appendChild(libraryContainer);
  }
}
