// ToP JS Course> Objects and Object constructors>  Book exercise // Aug 2023

// make a createBook function to declutter displayLibrary

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read.toLowerCase() === "y";
  }
}

class Library {
  constructor() {
    this.myLibrary = [
      {
        title: "HardCode",
        author: "Sir Not Appearing",
        pages: "infinite",
        read: false,
      },
    ];
    this.bookContainer = document.createElement("div");
    this.bookContainer.classList.add("bookContainer");
  }

  addBookToLibrary() {
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
    if (
      title &&
      author &&
      /^\d+$/.test(pages) &&
      /^(y|yes|n|no)$/.test(readValue)
    ) {
      const newBook = new Book(title, author, pages, readValue);
      this.myLibrary.push(newBook);
      titleInput.value = "";
      authorInput.value = "";
      pagesInput.value = "";
      readInput.value = "";
      readStatement.textContent = "";
      pagesStatement.textContent = "";
    } else {
      if (!/^\d+$/.test(pages)) {
        pagesStatement.textContent = "Pages must be a number";
      } else {
        pagesStatement.textContent = ""; //redundant line? updated before if.
      }
      if (!/^(y|yes|n|no)$/i.test(readValue)) {
        readStatement.textContent = "Enter Yes or No";
      } else {
        readStatement.textContent = ""; //redundant line? updated before if.
      }
    }
    this.displayLibrary();
  }

  displayLibrary() {
    const bookCase = document.querySelector(".bookCase");
    const existingLibraries = document.querySelectorAll(".library");
    existingLibraries.forEach((existingLibrary) => {
      existingLibrary.remove();
    });
    this.bookContainer.innerHTML = "";
    this.myLibrary.forEach((book, index) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("book");
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
      delBook.classList.add("delete");
      delBook.addEventListener("click", () => {
        this.deleteBook(index);
      });
      const bookRead = document.createElement("button");
      bookRead.innerText = "Book Read";
      bookRead.addEventListener("click", () => {
        this.bookToRead(index);
      });
      bookCard.appendChild(titleElement);
      bookCard.appendChild(authorElement);
      bookCard.appendChild(pagesElement);
      bookCard.appendChild(readElement);
      bookCard.appendChild(delBook);
      if (!book.read) {
        bookCard.appendChild(bookRead);
      }
      this.bookContainer.appendChild(bookCard);
    });
    bookCase.appendChild(this.bookContainer);
  }

  deleteBook(index) {
    this.myLibrary.splice(index, 1);
    this.displayLibrary();
  }

  bookToRead(index) {
    this.myLibrary[index].read = true;
    console.log("brc-", this.myLibrary[index].read);
    this.displayLibrary();
    console.log("brc1-", this.myLibrary[index].read);
  }
}

const myLibraryInstance = new Library();
myLibraryInstance.displayLibrary();

//   function adjustLibraryHeight() {
//     const bookCase = document.querySelector(".bookCase");
//     const library = document.querySelector(".library");
//     const availableHeight = bookCase.offsetHeight - 33;
//     library.style.maxHeight = `${availableHeight}px`;
//   }

//   adjustLibraryHeight();
//   window.addEventListener("resize", adjustLibraryHeight);
