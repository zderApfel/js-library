/*
    --Library Mini-Assignment--

A simple web page that creates a series of books and displays them on a webpage. Each book has a few bits of information about them:
    - title
    - author
    - pages
    - haveRead (whether or not the book has been read by me)
A render() function that creates "cards" for each book that displays their information
    - This must also include a button that allows you to toggle it's "read" status
A form to create a new book, and then adds it to the display page

--NOTES--

Each book card will have four elements to it
*/

const LIBRARY = document.getElementById("library-container");
let books = [];

addBook("Test","test","266",true);
render();

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead; //Bool
}

/*Book.prototype.info = function(){
    let readText = "";
    if (this.haveRead){
        readText = "have read";
    }
    else {
        readText = "not read yet";
    }
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${readText}`)
}*/

function addBook(title, author, pages, read){
    let x = new Book(title, author, pages, read);
    books.push(x); 
}

function render(){
    for (x in books){
        let newBook = document.createElement("div");
        newBook.className = "book-card";
        
        let bookTitle = document.createElement("div");
        bookTitle.className = "title";
        bookTitle.innerHTML = books[x].title;

        let bookAuthor = document.createElement("div");
        bookAuthor.className = "author";
        bookAuthor.innerHTML = `by ${books[x].author}`;

        let bookPages = document.createElement("div");
        bookPages.className = "pages";
        bookPages.innerHTML = `${books[x].pages} pages`;

        let bookRead = document.createElement("div");
        if (books[x].haveRead){
            bookRead.className = "have-read";
            bookRead.innerHTML = "Read";
        }
        else {
            bookRead.className = "have-not-read";
            bookRead.innerHTML = "Not Read";
        }
        bookRead.addEventListener("click", function() {bookSwitch(books[x], bookRead)});

        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(bookRead);

        LIBRARY.appendChild(newBook);

    }
}

function bookSwitch(book, element){
    book.read = !book.read;
    if (book.read == true){
        element.className = "have-read";
        element.innerHTML = "Read";
    }
    else {
        element.className = "have-not-read";
        element.innerHTML = "Not Read";
    }
}

    