"use strict";
/**
 * Author: Felipe Castro
 * File: Basic.ts
 * Information: Basic TypeScript file to learn the basics
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Car = void 0;
/* ------------------------- VARIABLES, ARRAYS AND DATA TYPES ---------------------------- */
// Creating a function
function greeter(greet) {
    console.log(greet + ' World!');
}
// Defining a variable
var greet = 'Hello';
greeter(greet);
// Variable/Data Types
var word1 = 'My String Variable';
var word2;
word2 = 'My String Variable2';
/*
let number=1;
number='Word'
This will cause an error because we defined the number as int so we can't
insert words
*/
// Arrays
var countries = ['Costa Rica', 'United Stated', 'Netherlands'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Two Data Types
var differentValues = [1, 'My String'];
// Multiple Data types
var a;
a = 8; // Initially the value of the variable is a number
a = 'Now I am an string'; // Then the value of the variable is an string 
a = true; // Finally, is a boolean
// Using Enums
var colors;
(function (colors) {
    colors[colors["red"] = 1] = "red";
    colors[colors["green"] = 2] = "green";
    colors[colors["blue"] = 3] = "blue";
})(colors || (colors = {}));
;
var red = colors.red;
var green = colors.green;
var blue = colors.blue;
// Greeter
function greeter2() {
    console.log('Hello');
    // return 1; THIS IS GOING TO CREATE AN ERROR BECAUSE WE SET THE FUNCTION AS VOID
}
// Defining another functions 
var b;
b = 5;
// Data Assertions
// Using this we can use the string methods
var myGreet = ('Hello World');
var countOfWords = myGreet.length;
// Or with any we can do it but at the moment of using the method we need to indicate the type
var myGreet2 = ('Hello World 2');
var countOfWords2 = myGreet2.length;
/* ----------------------------------- FUNCTIONS ----------------------------------------- */
// Simple function that can cause issues because we are not indicating the type of the parameters
function getSum(x, y, z) {
    return x + y + z;
}
//getSum('Hello',4,5);
// Simple function indicating the type of the parameters
function getSum2(x, y, z) {
    return x + y + z;
}
var resultOfSum = getSum2(1, 2, 3);
console.log('The result of sum 1,2 and 3 is ' + resultOfSum);
// Defining the variable with the function
var resultOfSum2 = function (x, y, z) {
    return x + y + z;
};
// With the question mark on the variable I am indicating the variable is optional and not required
function getSum3(x, y, z) {
    // Additionaly we need to check if the variable is undefined because if it is we are going to have issues
    if (typeof z == 'undefined') {
        return x + y;
    }
    else {
        return x + y + z;
    }
}
// So I can call the function using just two parameters
var resultOfSum3 = getSum3(5, 5);
console.log('The result of sum 5 and 5 is ' + resultOfSum3);
// Also, we can define default values for the functions just indicating an equal
function getSum4(x, y, z) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 1; }
    if (z === void 0) { z = 1; }
    // So, in this case won't be required to check if the value was not inserted
    return x + y + z;
}
var resultOfSum4 = getSum4(10, 5);
console.log('The result of sum 10 and 5 is ' + resultOfSum4);
// Rest Parameters: We can use them when we don't know the exact number of parameters
// In this case we are indicating that the function can receive any number of parameters with the type number
function getAverageOfPeople() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < x.length; i++) {
        total += x[i];
        count++;
    }
    var result = total / count; // Const because the value inside the variable won't be edited on the future
    return result;
}
// Calling the function with the parameters
// 4 Parameters
var resultAverage1 = getAverageOfPeople(10, 20, 30, 40);
// 2 Parameters
var resultAverage2 = getAverageOfPeople(10, 20);
console.log('The result using 4 parameters is ' + resultAverage1);
console.log('The result using 2 parameters is ' + resultAverage2);
/* ----------------------------------- CLASSES ----------------------------------------- */
// Creating a Simple Class 
// I put an export here to import this class on module.ts
var Car = /** @class */ (function () {
    // Constructor with parameters
    function Car(brand, model, color, yearManufacture) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.yearManufacture = yearManufacture;
    }
    /* THIS WILL CAUSE AN ERROR, MULTIPLE CONSTRUCTORS IMPLEMENTED ARE NOT ALLOWED
    // Constructor without parameters
    constructor(){
        this.brand='';
        this.model='';
        this.color='';
        this.yearManufacture=0;
    }
    */
    // Method to print all the information, not required to indicate function word
    Car.prototype.printInformation = function () {
        console.log('Data about the car: ');
        console.log('Brand : ' + this.brand);
        console.log('Model : ' + this.model);
        console.log('Color : ' + this.color);
        console.log('Year : ' + this.yearManufacture);
    };
    return Car;
}());
exports.Car = Car;
// Creating the Car Object 
var car = new Car('Hyundai', 'Accent', 'Black', 2012);
// Printing the Car Information
car.printInformation();
// Accesing the attributes
console.log('Car: ' + car.brand + ' - ' + car.model);
// Inheritance 
// Creating Father/Base Class
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age, eyesColor) {
        this.name = name;
        this.age = age;
        this.eyesColor = eyesColor;
    }
    // Getters and Setters
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.setEyesColor = function (eyesColor) {
        this.eyesColor = eyesColor;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getEyesColor = function () {
        return this.eyesColor;
    };
    // Methods
    Person.prototype.showInformation = function () {
        console.log(this.name + "'s Information");
        console.log('Age : ' + this.age);
        console.log('EyesColor : ' + this.eyesColor);
    };
    Person.prototype.doEat = function () {
        console.log('I am eating');
    };
    return Person;
}());
// Creating Son/Derivate Class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    // Constructor with father's attributes and son's attributes
    function Employee(name, age, eyesColor, monthlySalaryInDollars, company) {
        var _this = _super.call(this, name, age, eyesColor) || this;
        _this.monthlySalaryInDollars = monthlySalaryInDollars;
        _this.company = company;
        return _this;
    }
    // Getters and setters
    Employee.prototype.setSalary = function (salary) {
        this.monthlySalaryInDollars = salary;
    };
    Employee.prototype.setCompany = function (company) {
        this.company = company;
    };
    Employee.prototype.getSalary = function () {
        return this.monthlySalaryInDollars;
    };
    Employee.prototype.getCompany = function () {
        return this.company;
    };
    // Methods
    // Displaying Information and Adding the Father Information
    Employee.prototype.showInformation = function () {
        _super.prototype.showInformation.call(this);
        console.log('Monthly Salary In Dollars : ' + this.monthlySalaryInDollars);
        console.log('Company : ' + this.company);
    };
    // Simple Method
    Employee.prototype.doJob = function () {
        console.log('I am working');
    };
    return Employee;
}(Person));
// Creating two objects
var person1 = new Person('Felipe', 24, 'Dark-Brown');
var employee = new Employee('Rodrigo', 28, 'Green', 1600, 'HP');
person1.showInformation();
person1.doEat();
employee.showInformation();
employee.doEat();
employee.doJob();
// Implementing the Interface
var Menu = /** @class */ (function () {
    function Menu() {
        // Attributes
        this.menuOption = 0;
        // We need to define the values for each attribute of the interface
        this.username = 'Felipe';
        this.password = '4YTRf89g8';
        this.email = 'myemail@gmai.com';
    }
    // Displaying Menu
    Menu.prototype.displayMenu = function () {
        console.log('I am the Menu');
    };
    // Implementing the methods from the interface
    Menu.prototype.registerUser = function () {
        console.log('Registered the User with this information: ');
        console.log('Username: ' + this.username);
        console.log('Password: ' + this.password);
        console.log('Email: ' + this.email);
    };
    Menu.prototype.removeUser = function () {
        console.log('Removed the user called ' + this.username);
    };
    return Menu;
}());
// Creating the Menu
var menu1 = new Menu();
menu1.displayMenu();
menu1.registerUser();
menu1.removeUser();
// Creating the appointmentCalendar
var appointmentCalendar1;
appointmentCalendar1 = {
    timeDate: new Date(Date.now()),
    description: "Learn Angular",
    place: "My Home Desktop"
};
/* ----------------------------------- GENERIC TYPES ----------------------------------------- */
// Creating a generic function that can receive any value type and return it
function returnAnyValue(value) {
    return value;
}
// Calling the function
var value1 = returnAnyValue(40);
var value2 = returnAnyValue('Hello World!');
// Printing the values
console.log('Printing value1 : ' + value1 + ' and value2 ' + value2);
// Also, we can create Generic Classes
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    // Generic Method
    GenericClass.prototype.returnVar1 = function (parameter) {
        this.variable1 = parameter;
        return this.variable1;
    };
    return GenericClass;
}());
var genericClass1 = new GenericClass();
console.log('Return the parameter of the method : ' + genericClass1.returnVar1(20));
console.log('Variable1 ' + genericClass1.variable1);
