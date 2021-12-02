import { Component } from "@angular/core";
import * as $ from "jquery";
import * as bootstrap from "bootstrap";

@Component({
  selector: 'products', // <products></products> or <div class="products"
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  // Creating the attributes
  addProduct: boolean = true;
  greet: string = 'Hello';
  productStatus: string = 'No product added';

  //Creating a constructor
  constructor() {
    setTimeout(() => {
      this.addProduct = false;
    }, 30000)
  }

  // Creating the methods
  onClick() {
    //Creating the array of products to add
    let productsToAdd: any = '';

    // Looping to the checkbox to check if the products have been checked
    for (let i = 1; i <= 4; i++) {
      // Checking each checkbox to verify if it is checked
      if (($('#box' + i)).is(':checked')) {
        let valueOfCheckbox: any = ($('#box' + i)).attr('value');
        productsToAdd += ' <br>' + valueOfCheckbox+'';
      }
    }

    // Verifying if any products were checked
    if (productsToAdd.length > 0) {
      // Triggering the click of the hidden button
      $('#successModalContent').append('These products were added successfully: ' + productsToAdd);
      $('#buttonToDisplayModal').trigger('click');
    } else {
      // Indicating that no elements were added
      $('#buttonToDisplayModal2').trigger('click');
    }
  }
}
