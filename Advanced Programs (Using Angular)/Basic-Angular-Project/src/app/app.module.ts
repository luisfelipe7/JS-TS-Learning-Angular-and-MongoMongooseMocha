import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
