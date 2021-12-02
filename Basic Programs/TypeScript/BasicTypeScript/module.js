"use strict";
/* ----------------------------------- MODULES ----------------------------------------- */
exports.__esModule = true;
// 1. First we need to put an export on the class that we want to import here
// 2. Then import the class here, doing this:
var basic_1 = require("./basic");
// Thanks to the previous import I can create objects of type Car without issues without issues
var car2 = new basic_1.Car('Toyota', 'Echo', 'White', 2004);
// Printing the car information
car2.printInformation();
