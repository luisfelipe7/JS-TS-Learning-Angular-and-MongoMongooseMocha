import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DurationCalculatorComponent } from './duration-calculator/duration-calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PlansPageComponent } from './plans-page/plans-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    DurationCalculatorComponent,
    HomeComponent,
    PlansPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
