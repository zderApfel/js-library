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
const TITLE_INPUT = document.getElementById("input-title");
const AUTHOR_INPUT = document.getElementById("input-author");
const PAGES_INPUT = document.getElementById("input-pages");
const READ_INPUT = document.getElementById("have-you-read");
const INPUT_SUBMIT = document.getElementById("submit");
INPUT_SUBMIT.addEventListener("click", function() {bookForm()});
let books = [
    new Book("Easy JavaScript: How One Bumbling Idiot Did It", "Zachary Zahradka", "786", true)
];

function Book(title, author, pages, haveRead){ //The Book object constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead; //Bool
}

for (x in books){
    render(books[x]);
}

function addBook(title, author, pages, read){
    let x = new Book(title, author, pages, read);
    books.push(x);
    return x;
}

function render(book){
    let newBook = document.createElement("div");
    newBook.className = "book-card";
    
    let bookTitle = document.createElement("div");
    bookTitle.className = "title";
    bookTitle.innerHTML = book.title;

    let bookAuthor = document.createElement("div");
    bookAuthor.className = "author";
    bookAuthor.innerHTML = `by ${book.author}`;

    let bookPages = document.createElement("div");
    bookPages.className = "pages";
    bookPages.innerHTML = `${book.pages} pages`;

    let bookRead = document.createElement("div");
    if (book.haveRead){
        bookRead.className = "have-read";
        bookRead.innerHTML = "Read";
    }
    else {
        bookRead.className = "have-not-read";
        bookRead.innerHTML = "Not Read";
    }
    bookRead.addEventListener("click", function() {bookSwitch(book, bookRead)});

    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(bookRead);

    LIBRARY.appendChild(newBook);

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

function bookForm(){
    let title = TITLE_INPUT;
    let author = AUTHOR_INPUT;
    let pages = PAGES_INPUT;
    
    if(title.validity.valueMissing || author.validity.valueMissing || pages.validity.valueMissing){
        alert("Please fill in all fields");
    }
    else{
        render(addBook(title.value, author.value, pages.value, READ_INPUT.checked)); 
        TITLE_INPUT.value = "";
        AUTHOR_INPUT.value = "";
        PAGES_INPUT.value = "";
        READ_INPUT.checked = false;
    }
}

    