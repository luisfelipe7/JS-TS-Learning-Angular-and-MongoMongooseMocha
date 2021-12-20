import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DurationCalculatorComponent } from './duration-calculator/duration-calculator.component';
import { ErrorPageComponent } from './error-page/error-page.component';

  // Creating an array with our Routes, defining a path for each of our routes
const routes: Routes = [
  // Home Page Route
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  // Duration Calculator Router
  { path: 'ourTimeTogether', component: DurationCalculatorComponent},
  // Error Page Route
  { path: '**', component: ErrorPageComponent }, // Double * means any path, so I will show the error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
