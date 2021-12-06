import { Book } from "./book.model";

export class dataSource
{
  // Attributes
  private books: Book[]; // List of books

  // Constructor without parameters
  constructor(){
    // Initializing the Book with Multiple Books
    this.books=new Array<Book>(
      new Book(1,'War and Peace','Tolstoy',20),
      new Book(2,'Dracula','Bram Stroker',15),
      new Book(3,'Harry Potter and the Philosophers stone - Special Edition','JK Rowling',10),
      new Book(4,'Harry Potter and the Prisoner of Azkaban','JK Rowling',25),
      new Book(5,'It','Stephen King',10)
    )
  }

  // Methods
  // We need to indicate that it is a get method then the name of the method
  obtainBooks(): Book[] {
    return this.books;
  }


}
