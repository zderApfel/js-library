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
*/

let myLibrary = [];

function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead; //Bool
}

Book.prototype.info = function(){
    let readText = "";
    if (this.haveRead){
        readText = "have read";
    }
    else {
        readText = "not read yet";
    }
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${readText}`)
}
