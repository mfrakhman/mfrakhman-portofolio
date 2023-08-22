const LIST_OF_BOOKS = [];

// Book Object
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getBook() {
    return this;
  }

  static setTableRow() {
    const table = document.getElementById("book-list");
    table.innerHTML = "";
    LIST_OF_BOOKS.forEach(book => {
      const row = document.createElement("tr");
      row.innerHTML =
        `<td>${book.title}</td>` +
        `<td>${book.author}</td>` +
        `<td>${book.year}</td>` +
        `<td>${book.category ? book.category : "-"}</td>`;
      row.classList.add("book-item");
      table.appendChild(row);
    });
  }

  static findByTitle(title) {
    if (title) {
      const table = document.getElementById("book-list");
      table.innerHTML = "";
      // Old Ways to call anonymous function
      const filteredBook = LIST_OF_BOOKS.filter(function (book) {
        return book.title.toLowerCase().includes(title.toLowerCase());
      });
      filteredBook.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML =
          `<td>${book.title}</td>` +
          `<td>${book.author}</td>` +
          `<td>${book.year}</td>` +
          `<td>${book.category ? book.category : "-"}</td>`;
        row.classList.add("book-item");
        table.appendChild(row);
      });
    } else {
      this.setTableRow();
    }
    // ES6 to call anonymous function
    // const filterBook = LIST_OF_BOOKS.filter(book => {
    //   return book.title === title;
    // });
    // // ES6 Simplified to call anonymous function
    // const filterBooks = LIST_OF_BOOKS.filter(book => book.title === title);
  }
}

// Book Child Biography
class BiographyBook extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
  setCategory(category) {
    this.category = category;
  }
}

// Book Child Novel
class NovelBook extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
  setCategory(category) {
    this.category = category;
  }
}

// Book Child Science
class ScieceBook extends Book {
  constructor(title, author, year) {
    super(title, author, year);
  }
  setCategory(category) {
    this.category = category;
  }
}

const novel_1 = new NovelBook("Sayang", "Fajar Rakhman", "2016");
novel_1.setCategory("Romance");
LIST_OF_BOOKS.push(novel_1.getBook());

const novel_2 = new NovelBook("Selesai", "Fajar Rakhman", "2021");
novel_2.setCategory("Romance");
LIST_OF_BOOKS.push(novel_2.getBook());

const novel_3 = new NovelBook("Lembar Baru", "Fajar Rakhman", "2023");
LIST_OF_BOOKS.push(novel_3.getBook());

const biography_1 = new BiographyBook(
  "B.J. Habibie, Si Jenius",
  "Jonar Situmorang",
  "2017"
);
biography_1.setCategory("History");
LIST_OF_BOOKS.push(biography_1.getBook());

const science_1 = new ScieceBook("Eloquent JavaScipt", "Haverbeke", "2013");
science_1.setCategory("Programing");
LIST_OF_BOOKS.push(science_1.getBook());

Book.setTableRow();

// Search By Title
const inputSearch = document.getElementById("search-book");
inputSearch.addEventListener("keyup", e => {
  console.log(inputSearch.value);
  Book.findByTitle(inputSearch.value);
});

console.log(LIST_OF_BOOKS);
