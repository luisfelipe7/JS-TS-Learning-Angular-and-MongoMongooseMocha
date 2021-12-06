import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Adding the forms module */
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/* Importing my new component */
import { ProductsComponent } from './products/products.components';
import { VideogamesComponent } from './videogames/videogames.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    VideogamesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
