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
