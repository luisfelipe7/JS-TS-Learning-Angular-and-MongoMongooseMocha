import { Component, OnInit } from '@angular/core';
// Importing the Router
import { Router } from '@angular/router';
// Importing Jquery
import * as $ from "jquery";


@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  sendToHome($event: any): void {
    // Sending the user back to the homepage
    this.router.navigate(['/inicio']);
  }

}
