import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from './book.model';
import { BookRepository } from './repository.model';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ['./book.component.css'] // Don't forget to use [] because multiple styles are allowed and we should use an array
})

export class BookComponent {



  // ---------------------- VARIABLES ---------------------
  // These are my attributes

  // Adding the model for my component
  model: BookRepository = new BookRepository();

  // Defining a variable
  book: Book = this.model.getBookId(2);

  // Boolean to handle the disable of the button
  disabledButton: boolean = false;

  // Defining a color for my style
  colorForMyStyle: string = "yellow";

  farewell: string = "Thanks for using the app";

  // My Variables
  name1: string = 'Angular Pipes';
  price: number = 159.95;
  today: number = Date.now();
  description = 'This is a simple text to make some tests and use the custom pipe';

  // Variables to test the directives
  showImage: boolean = true;
  myNumber2: number = 4;
  myNumber3: number = 3;
  myListOfHeroes = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Ironman' },
    { id: 3, name: 'Hulk' }
  ];

  // Variable to learn about forms
  newBook: Book = new Book();

  // Variable to control de submit of the form
  formSubmit:boolean = false;

  // ---------------------- METHODS ---------------------
  // Get Class Binding
  getClassBinding(id: number): string {
    let book = this.model.getBookId(id);
    return (book.price >= 20 ? "bg-primary" : "bg-info") + " m-3";
  }

  // Get Class Based on the Price of the Book
  getClassObject(id: number): Object {
    let book = this.model.getBookId(id);
    return {
      "bg-primary": book.price >= 20,
      "bg-info": book.price < 20,
      "text-white": book.name.includes('Harry Potter')
    }
  }

  // Get Style Based on the attributes of the Book
  getStyleBinding(id: number): Object {
    let book = this.model.getBookId(id);
    return {
      fontSize: "4px",
      color: "purple"
    }
  }

  // Capture click of the button and perform an action
  onClickMyButton($event: any) {
    //This will avoid to trigger or propagate any other events like the one of the div
    $event.stopPropagation();

    console.log('Button was clicked');
    console.log(event);
  }

  // Capture click of the div and perform an action
  onClickMyDiv(event: any) {
    console.log('My div was clicked');
    console.log(event);
  }

  // Capture keyup event (When a user presses and releases a key, the (keyup) event occurs) on my text field
  onKeyUpInMyField($event: any) {
    // Checking if the enter was pressed based on the Key Code
    if ($event.keyCode === 13) {
      console.log('Pressed Enter Key , here is the actual value of the field: ' + $event.target.value);
    }
    console.log('Capturing any keys');
  }

  // Capturing the enter on my field
  onEnterInMyField() {
    console.log('Pressed entered in my second text field');
  }

  // Capturing the keyup event on the third text field
  onKeyUpMyField3($event: any) {
    console.log('Printing the value of the variable called farewell: ' + this.farewell);
    console.log('Printing the value of the text field: ' + $event.target.value);
  }

  // Methods to learn about forms
  get jsonBook() {
    return JSON.stringify(this.newBook);
  }

  addBook(b: Book) {
    console.log("New Book is " + this.jsonBook);
  }

  verifyName(model: any) {
    console.log(model);
  }

  getValidationErrors(model: any) {
    let ctrlName: string = model.name;
    let messages: string[] = [];

    if (model.errors) {
      for (let error in model.errors) {
        switch (error) {
          case "required":
            messages.push('You must enter a ' + ctrlName);
            break;
          case "minlength":
            messages.push('You must min. 3 characters');
            break;
          case "default":
            messages.push('You must check the field, it is having errors');
            break;
        }
      }
    }
    return messages;
  }


  submitForm(form:NgForm) {
    this.formSubmit=true;
    // If the form is valid we will add the book and create a new book
    if(form.valid){
      this.addBook(this.newBook);
      this.newBook = new Book();
      form.reset();
      this.formSubmit=false;
    }else{
      // Printing the error messages
    }
  }

  getValidationErrorsWithKey(model: any, key:string) {
    let ctrlName: string = model.name || key;
    let messages: string[] = [];
    if (model.errors) {
      for (let error in model.errors) {
        switch (error) {
          case "required":
            messages.push('You must enter a ' + ctrlName);
            break;
          case "minlength":
            messages.push('You must min. 3 characters');
            break;
          case "default":
            messages.push('You must check the field, it is having errors');
            break;
        }
      }
    }
    return messages;
  }


  getFormValidationErrors(form:NgForm):string[] {
    let messages:string[] = [];
    Object.keys(form.controls).forEach(x=>{
      console.log(x);
      console.log(form.controls[x]);
      this.getValidationErrorsWithKey(form.controls[x],x).forEach(message=> messages.push(message));
    })
    return messages;
  }


}


