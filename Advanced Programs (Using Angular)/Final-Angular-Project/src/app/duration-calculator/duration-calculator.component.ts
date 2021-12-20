import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DurationCalculatorModel } from './duration-calculator.model'

@Component({
  selector: 'app-duration-calculator',
  templateUrl: './duration-calculator.component.html',
  styleUrls: ['./duration-calculator.component.css']
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

}
