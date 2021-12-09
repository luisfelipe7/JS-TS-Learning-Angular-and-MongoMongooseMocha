import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { CustomPipe } from './custom.pipe';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookComponent,
    CustomPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BookComponent,PostComponent]
})
export class AppModule { }
