// Task 1: Create a Book Class
class Book{
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`; // getting book details
    }
    get isAvailable(){
        return this._isAvailable; // getter
    }
    set isAvailable(status){
        this._isAvailable = status; //setter
    }

}
// Task 2: Create a Section Class
class Section {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book); // add a book
    }
    getAvailableBooks(){
        return this.books.filter(book => book.isAvailable).length; // retreiving the count of books
    }
    listBooks(){
        this.books.forEach(book => {
            console.log(`${book.getDetails()} Books Available: ${book.isAvailable}`); // listing the books in the section

        }
        );
    }
}
//Task 3: Create a Patron Class
class Patron{
    constructor(name){
        this.name = name;
        this.borrowedBooks =[];
    }
    borrowBook(book){
        if (book.isAvailable){ // borrowing a book if available
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}"`);
        }
        else{
            console.log(`"${book.title}" is not available`);
        }
    }
    returnBook(book){
        const index = this.borrowedBooks.indexOf(book); // returning a borrowed book and makes it available again
        if(index !== -1){
            this.borrowedBooks.splice(index, 1);
            book.isAvailable = true;
            console.log(`${this.name} has returned "${book.title}"`);
        }
        else{
            console.log(`${this.name} has not borrowed "${book.title}"`);
        }
    }

}
