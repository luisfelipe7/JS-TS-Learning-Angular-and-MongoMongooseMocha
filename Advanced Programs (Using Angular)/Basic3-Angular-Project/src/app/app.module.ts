import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { EditComponent } from './products/edit/edit.component';

// We can send query parameters
// localhost4200/products?page=1&order
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoryComponent,
    ErrorPageComponent,
    ProductComponent,
    UserComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
