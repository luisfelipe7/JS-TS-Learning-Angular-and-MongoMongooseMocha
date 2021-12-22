import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/themeForCounter/css/style.css', '../../assets/themeForCounter/css/all.css', '../../assets/themeForCounter/vendor/bootstrap-icons/bootstrap-icons.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPage(pageNumber: number) {
    switch (pageNumber) {
      case 1:
        this.router.navigate(['/inicio']);
        break;
      case 2:
        this.router.navigate(['/nuestrosPlanes']);
        break;
      case 3:
        this.router.navigate(['/nuestroTiempoJuntos']);
        break;
      default:
        this.router.navigate(['/inicio']);
        break;
    }

  }

}
