import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { CustomPipe } from './custom.pipe';

@NgModule({
  declarations: [
    BookComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
