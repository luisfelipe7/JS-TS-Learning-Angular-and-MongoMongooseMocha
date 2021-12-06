import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
