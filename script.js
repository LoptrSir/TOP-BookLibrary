// ToP JS Course> Objects and Object constructors>  Book exercise // Aug 2023
// Generally satisfied

let myLibrary = [
  {
    title: "HardCode",
    author: "Sir Not Appearing",
    pages: "infinite",
    read: false,
  },
];

function Book(title, author, pages, read) {
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
  const readStatement = document.getElementById("read-statement");
  const pagesStatement = document.getElementById("pages-statement");
  // pagesInput.addEventListener("blur", validatePages);     // check pages function on exit of pages entry
  // function validatePages() {
  //   const pages = pagesInput.value.trim();
  //   const pagesStatement = document.getElementById("pages-statement");
  //   if (!/^\d+$/.test(pages)) {
  //     pagesStatement.textContent = "Pages must be a number";
  //   } else {
  //     pagesStatement.textContent = "";
  //   }
  //}
  if (
    title &&
    author &&
    /^\d+$/.test(pages) &&
    /^(y|yes|n|no)$/.test(readValue)
  ) {
    const newBook = new Book(title, author, pages, readValue);
    // const newBook = new Book(title, author, pages, /^(y|yes)$./test(readValue) ? 'y' : 'n');
    myLibrary.push(newBook);
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = "";
    readStatement.textContent = "";
    pagesStatement.textContent = "";
    displayLibrary();
  } else {
    if (!/^\d+$/.test(pages)) {
      pagesStatement.textContent = "Pages must be a number";
    } else {
      pagesStatement.textContent = "";
    }
    if (!/^(y|yes|n|no)$/i.test(readValue)) {
      readStatement.textContent = "Enter Yes or No";
    } else {
      readStatement.textContent = "";
    }
  }
  // if (title && author && pages && /^(y|yes|n|no)$/.test(readValue)) {
  //   const newBook = new Book(title, author, pages, readValue);
  //   // const newBook = new Book(title, author, pages, /^(y|yes)$./test(readValue) ? 'y' : 'n');
  //   myLibrary.push(newBook);
  //   titleInput.value = "";
  //   authorInput.value = "";
  //   pagesInput.value = "";
  //   readInput.value = "";
  //   readStatement.textContent = "";
  //   pagesStatement.textContent = "";
  //   displayLibrary();
  // } else {
  //   readStatement.textContent = "Enter Yes or No";
  // }
}

function displayLibrary() {
  const bookCase = document.querySelector(".bookCase");

  const existingLibraries = document.querySelectorAll(".library");
  //const existingLibraries = document.querySelectorAll("div.library");
  existingLibraries.forEach((existingLibrary) => {
    existingLibrary.remove();
  });

  const libraryContainer = document.createElement("div");
  libraryContainer.classList.add("library");
  //libraryContainer.className = "library";

  myLibrary.forEach((book, index) => {
    const bookDetails = document.createElement("div");
    bookDetails.classList.add("book");
    const titleElement = document.createElement("p");
    titleElement.textContent = book.title;
    const authorElement = document.createElement("p");
    authorElement.textContent = `By: ${book.author}`;
    const pagesElement = document.createElement("p");
    pagesElement.textContent = `${book.pages} pages`;
    const readElement = document.createElement("p");
    readElement.textContent = book.read
      ? "This book has been read"
      : "This book is unread";

    const delBook = document.createElement("button");
    delBook.innerText = "Delete Book";
    delBook.classList.add('delete');
    delBook.addEventListener("click", () => {
      deleteBook(index);
    });
    // \n doesn't seem to work   \b seems to add a few whitespaces breakit up into multiple ` `, ` ` elements only priveds first one
    //bookDetails.textContent = `${book.title}`, `by ${book.author}`, `${book.pages} pages`,`${book.read ? "this book is read." : "this book is unread."}`;
    // bookDetails.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "this book is read." : "this book is unread."}`;
    const readBook = document.createElement("button");
    readBook.innerText = "Read Book";
    readBook.addEventListener("click", () => {
      bookToRead(index);
    });

    bookDetails.appendChild(titleElement);
    bookDetails.appendChild(authorElement);
    bookDetails.appendChild(pagesElement);
    bookDetails.appendChild(readElement);
    bookDetails.appendChild(delBook);
    if (!book.read) {
      bookDetails.appendChild(readBook);
    }

    libraryContainer.appendChild(bookDetails);
  });
  bookCase.appendChild(libraryContainer);
  //document.body.appendChild(libraryContainer);
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

function adjustLibraryheight() {
  const bookCase = document.querySelector(".bookCase");
  const library = document.querySelector(".library");
  const availableHeight = bookCase.offsetHeight - 33;
  library.style.maxHeight = `${availableHeight}px`;
}

adjustLibraryheight();
window.addEventListener("resize", adjustLibraryheight);
