import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/postsasd';

  constructor(private http:HttpClient) {
  }

  getPosts(){
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post:any){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post:any){
    return this.http.put(this.url+'/'+post.id,JSON.stringify(post));
  }

  patchPost(post:any){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({body:post.body}));
  }

  deletePost(post:any){
    let idToDelete=post.id;
    return  this.http.delete(this.url+'aaa' + '/' + idToDelete);
  }

  private handleError(errorFound:HttpErrorResponse){
    if(errorFound.error instanceof ErrorEvent){
      // Client Error
      console.log('Client Error: '+errorFound.error.message);
    }else{
      // Backend Error
      console.log(`Backend Error: status code: ${errorFound.status} error: ${errorFound.error}`);
    }
    return throwError("Unknown error");
  }

}
