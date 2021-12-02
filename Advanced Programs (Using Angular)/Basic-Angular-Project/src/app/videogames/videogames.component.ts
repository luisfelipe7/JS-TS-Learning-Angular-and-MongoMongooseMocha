import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
  /* I can do this to directly inject HTML and ignore the template that I have
  template: '<b> My Videogame </b>' -> Inline template
  */
  /* In the same way we can do it with the styles
  styles: ['p{color:blue}']
  */
})
export class VideogamesComponent implements OnInit {
  // Creating a dynamic variable to change the value
  videogameId:number=1;
  stockStatus:string='Yes';

  constructor() { }

  ngOnInit(): void {
  }

  getStockStatus() {
    return this.stockStatus;
  }

}
