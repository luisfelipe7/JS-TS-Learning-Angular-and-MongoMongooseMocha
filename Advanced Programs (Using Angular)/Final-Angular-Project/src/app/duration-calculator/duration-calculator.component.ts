import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DurationCalculatorModel } from './duration-calculator.model'
// Importing Jquery
import * as $ from "jquery";

@Component({
  selector: 'app-duration-calculator',
  templateUrl: './duration-calculator.component.html',
  styleUrls: ['./duration-calculator.component.css', '../../assets/themeForCounter/css/style.css','../../assets/themeForCounter/css/all.css', '../../assets/themeForCounter/vendor/bootstrap-icons/bootstrap-icons.css']

})
export class DurationCalculatorComponent implements OnInit {
  public dCModel: DurationCalculatorModel;
  public myInterval: any;

  constructor(private router: Router) {
    this.dCModel = new DurationCalculatorModel(0, 0, 0, 0, 0, 0);
  }

  ngOnInit(): void {
    // Start the updating of the time
    this.startExecution();

    // PENDING TO FIX
   // this.loadScript("src/assets/themeForCounter/js/script.js");

  }


  // Function in charge of start executing the function in charge of updating the time each second
  startExecution() {
    this.myInterval = setInterval(() => {
      // This function is called each second
      this.dCModel.updateDuration();
    }, 1000);
  }

  // Function that cancel the execution of the function in charge of updating the time each second
  stopExecution() {
    clearInterval(this.myInterval);
  }

  public loadScript(url: any) {
    var node = document.createElement('script');
    node.src = url;
    console.log('URL '+node.src);
    node.src = "src/assets/themeForCounter/js/script.js";
    node.type = 'text/javascript';
    console.log('URL '+node.src);
    document.getElementsByTagName('head')[0].appendChild(node);
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
