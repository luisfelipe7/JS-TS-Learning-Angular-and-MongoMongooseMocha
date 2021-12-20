export class DurationCalculatorModel {

  // Attributes for my calculator
  private years?: any;
  private months?: any;
  private days?: any;
  private hours?: any;
  private minutes?: any;
  private seconds?: any;
  // Attribute to save the actual date
  private actualDateTime?: any;
  // Attribute to save the start date: Sat Sep 12 2015 00:00:00 GMT-0600 (Central Standard Time)
  // (Year,Month,Day,Hours,Minutes,Seconds,Milliseconds)
  private startDate?: any = new Date(2015, 8, 12, 0, 0, 0, 0);
  // TEST DATES
  //private startDate?: any = new Date(2019, 11, 18, 0, 0, 0, 0);


  // Constructor for my calculator
  constructor(years: any, months: any, days: any, hours: any, minutes: any, seconds: any) {
    this.years = years;
    this.months = months;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  // Gets Methods
  getYears(): any {
    return this.years;
  }
  getMonths(): any {
    return this.months;
  }
  getDays(): any {
    return this.days;
  }
  getHours(): any {
    return this.hours;
  }
  getMinutes(): any {
    return this.minutes;
  }
  getSeconds(): any {
    return this.seconds;
  }

  // Set Methods
  setSeconds(seconds: any) {
    this.seconds = seconds;
  }
  setMinutes(minutes: any) {
    this.minutes = minutes;
  }
  setHours(hours: any) {
    this.hours = hours;
  }
  setYears(years: any) {
    this.years = years;
  }

  // Function in charge of updating the values
  updateDuration() {
    // Putting an actual date to the attribute
    this.actualDateTime = new Date();
    // Updating the seconds
    this.setSeconds(this.actualDateTime.getSeconds());
    // Updating the minutes
    this.setMinutes(this.actualDateTime.getMinutes());
    // Updating the hours
    this.setHours(this.actualDateTime.getHours());
    // Updating the years
    this.setYears(this.calculateYears(this.actualDateTime.getFullYear(), this.actualDateTime.getMonth(), this.actualDateTime.getDate()));
    console.log('Start Date: ' + this.startDate.toString());
  }

  // Calculating the years
  calculateYears(actualYear: any, actualMonth: any, actualDay: any): any {
    var durationYears = actualYear - this.startDate.getFullYear();
    // Check if the actual year is bigger than the year of start ( For Example 2021 > 2015)
    if (actualYear > this.startDate.getFullYear()) {
      // Then check if the actual month is bigger thant the year of start ( For Example December(11) > September(8))
      if (actualMonth > this.startDate.getMonth()) {
        // Just return the years without modifying the results
        return durationYears;
      } else {
        // Case where the months are equal
        if (actualMonth == this.startDate.getMonth()) {
          // Checking the days
          if (actualDay >= this.startDate.getDate()) {
            // If the day is the same or bigger
            return durationYears;
          } else {
            // If the actual day is smaller than the start day we need to minus 1
            return durationYears - 1;
          }
        } else {
          // If the month is smaller than the start month we need to minus 1 to the total
          return durationYears - 1;
        }
      }
    } else {
      return durationYears;
    }
  }

  // Calculate the months
  calculateMonths(actualYear: any, actualMonth: any, actualDay: any): any {
    var durationMonths = 0;
    // The actual year is the same as the start year
    if (actualYear == this.startDate.getFullYear()) {
      // Checking the months, still on the same month
      if (actualMonth == this.startDate.getMonth()) {
        return durationMonths;
      } else {
        // Checking the months, on another month
        if (actualMonth > this.startDate.getMonth()) {
          // Checking the date, actual date is bigger
          if (actualDay >= this.startDate.getDate()) {
            durationMonths = (actualMonth + 1) - (this.startDate.getMonth() + 1);
            return durationMonths;
          } else {
            // The actual date is smaller than the expected date
            durationMonths = (actualMonth + 1) - (this.startDate.getMonth() + 1) - 1;
            return durationMonths;
          }
        } else {
          return durationMonths;
        }
      }
    } else {
      // The actual year is bigger than the start year
      if (actualYear > this.startDate.getFullYear()) {
        // Then the actual month is smaller than the start month
        if (actualMonth < this.startDate.getMonth()) {
          durationMonths = 12 - ((this.startDate.getMonth() + 1) - (actualMonth + 1));
          // Checking the date, actual date is bigger
          if (actualDay < this.startDate.getDate()) {
            durationMonths = durationMonths - 1;
          }
          return durationMonths;
        } else {
          // The actual month is bigger than the start date
          if (actualMonth > this.startDate.getMonth()) {
            durationMonths = 12 - ((actualMonth + 1) - (this.startDate.getMonth() + 1));
            // Checking the date, actual date is bigger
            if (actualDay < this.startDate.getDate()) {
              durationMonths = durationMonths - 1;
            }
            return durationMonths;
          } else {
            // If the month is the same the day is zero then
            return durationMonths;
          }
        }
      } else {
        return durationMonths;
      }
    }
  }

}
