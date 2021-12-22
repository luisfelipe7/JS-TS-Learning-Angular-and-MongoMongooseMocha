import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DurationCalculatorComponent } from './duration-calculator/duration-calculator.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PlansPageComponent } from './plans-page/plans-page.component';

  // Creating an array with our Routes, defining a path for each of our routes
const routes: Routes = [
  // Home Page Route
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  // Duration Calculator Router
  { path: 'nuestroTiempoJuntos', component: DurationCalculatorComponent},
  // Plan For the Future Router
  { path: 'nuestrosPlanes', component: PlansPageComponent},
  // Error Page Route
  { path: '**', component: ErrorPageComponent }, // Double * means any path, so I will show the error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
