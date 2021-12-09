import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // ------------ DEFINING THE VARIABLES THAT I NEED ------------------
  // Variable to save the posts
  posts!: [any];
  url = 'https://jsonplaceholder.typicode.com/posts';
  myTextField = "";
  errorFound:any;


  // ------------ DEFINING THE METHODS THAT I NEED ------------------

  // Using a GET Method
  constructor(private postService: PostService) {
    console.log('Doing a GET Method');
    // Capturing the data from the HTTP
    // http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
    // console.log(response);
    // this.posts = <[any]>response;
    // })

    /* This will be executed on the onInit method

    postService.getPosts().subscribe(response => {
      console.log(response);
      this.posts = <[any]>response;
    })

    */
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      console.log(response);
      this.posts = <[any]>response;
    }, error=> this.errorFound = error);
  }

  // Using a POST Method
  createPost(input: HTMLInputElement) {
    console.log("Doing a POST method");
    let valueOfTheInput = input.value;
    input.value = '';
    const post: any = { title: input.value };
    this.postService.createPost(post).subscribe(response => {
      if (response) {
        post['id'] = (<any>response).id;
        this.posts!.splice(0, 0, post);
      } else {
        console.log('Response is null');
      }

    }, error => this.errorFound = error)
  }

  // Using a PUT Method
  updatePost(post: any) {
    console.log("Doing a PUT method");
    post.title = this.myTextField; //Updating the title with the text located on my TextField
    this.postService.updatePost(post).subscribe(response => {
      console.log(response);
    }, error => this.errorFound = error)
  }

  // USING a PATCH Method
  patchPost(post: any) {
    console.log("Doing a PATCH method");
    post.body = this.myTextField; // Updating the body with the text located on my TextField
    // Sending the body field to be updated
    this.postService.patchPost(post).subscribe(response => {
      console.log(response);
    }, error => this.errorFound = error)
  }

  // Using a HTTP Delete Request Method
  deletePost(post: any) {
    console.log("Doing a DELETE method");
    // Sending the post to delete
    this.postService.deletePost(post).subscribe(response => {
      console.log(response);
      // Removing the element from the list and updating the interface
      let indexOfPost = this.posts.indexOf(post);
      this.posts.splice(indexOfPost, 1);

    }, error => this.errorFound = error)
  }




}
