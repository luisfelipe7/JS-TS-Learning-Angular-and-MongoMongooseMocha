import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './products/edit/edit.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // Creating an array with our Routes, defining a path for each of our routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // Since we are having multiple definitions for products, we need to define a children array
  {
    path: 'products', component: ProductsComponent, children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: EditComponent }
    ]
  },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':name', component: UserComponent }
    ]
  },
  { path: '**', component: ErrorPageComponent }, // Double * means any path, so I will show the error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Sending the routes that we created as a parameter
  exports: [RouterModule]
})
export class AppRoutingModule { }
