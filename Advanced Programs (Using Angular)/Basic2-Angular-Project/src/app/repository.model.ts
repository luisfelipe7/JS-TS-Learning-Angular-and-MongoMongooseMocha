import { Book } from './book.model';
import { dataSource } from './dataSource.model';

export class BookRepository{
    // Attributes
    private dataSource : dataSource;
    private books: Book[];

    // Constructor
    constructor(){
      // Initializing the attributes
      this.dataSource= new dataSource();
      this.books = new Array<Book>();
      this.dataSource.obtainBooks().forEach(b=>this.books.push(b));
    }

    // Methods
    // Here we are going to define all the methods that we need to define the model

    // Get all Books
    getBooks(): Book[]{
      return this.books;
    }

    // Get Book by ID
    getBookId(id:number):any{
      // I set to the type of the method any because if the id is not found it will return undefined
      return this.books.find(b=> b.id==id);
    }


}
