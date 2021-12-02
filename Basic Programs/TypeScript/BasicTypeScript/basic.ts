/**
 * Author: Felipe Castro
 * File: Basic.ts
 * Information: Basic TypeScript file to learn the basics
 */




/* ------------------------- VARIABLES, ARRAYS AND DATA TYPES ---------------------------- */

// Creating a function
function greeter(greet:string){
    console.log(greet+' World!');
}

// Defining a variable
let greet= 'Hello';
greeter(greet);

// Variable/Data Types
let word1:string='My String Variable';
let word2:string;
word2='My String Variable2';

/* 
let number=1;
number='Word'
This will cause an error because we defined the number as int so we can't
insert words
*/

// Arrays
let countries:string[]=['Costa Rica', 'United Stated', 'Netherlands'];
let numbers:Array<number>=[1,2,3,4,5,6,7,8,9,10];

// Two Data Types
let differentValues:[number,string]=[1,'My String'];

// Multiple Data types
let a:any;
a=8; // Initially the value of the variable is a number
a='Now I am an string'; // Then the value of the variable is an string 
a=true; // Finally, is a boolean

// Using Enums
enum colors {red=1,green=2,blue=3};
let red=colors.red;
let green=colors.green;
let blue=colors.blue;

// Greeter
function greeter2():void{
    console.log('Hello');
   // return 1; THIS IS GOING TO CREATE AN ERROR BECAUSE WE SET THE FUNCTION AS VOID
}

// Defining another functions 
let b:number;
b=5;

// Data Assertions
// Using this we can use the string methods
let myGreet:string=('Hello World');
let countOfWords=myGreet.length;
// Or with any we can do it but at the moment of using the method we need to indicate the type
let myGreet2:any=('Hello World 2');
let countOfWords2=(myGreet2 as string).length;



/* ----------------------------------- FUNCTIONS ----------------------------------------- */

// Simple function that can cause issues because we are not indicating the type of the parameters
function getSum(x,y,z){
    return x+y+z;
}
//getSum('Hello',4,5);

// Simple function indicating the type of the parameters
function getSum2(x:number,y:number,z:number){
    return x+y+z;
}
let resultOfSum=getSum2(1,2,3);
console.log('The result of sum 1,2 and 3 is '+resultOfSum);

// Defining the variable with the function
let resultOfSum2=function(x:number,y:number,z:number):number{
    return x+y+z;
}

// With the question mark on the variable I am indicating the variable is optional and not required
function getSum3(x:number,y:number,z?:number){
    // Additionaly we need to check if the variable is undefined because if it is we are going to have issues
    if(typeof z=='undefined'){
        return x+y;
    }else{
        return x+y+z;
    }
}
// So I can call the function using just two parameters
let resultOfSum3=getSum3(5,5);
console.log('The result of sum 5 and 5 is '+resultOfSum3);

// Also, we can define default values for the functions just indicating an equal
function getSum4(x:number=1,y:number=1,z:number=1):number{
    // So, in this case won't be required to check if the value was not inserted
    return x+y+z;
}

let resultOfSum4=getSum4(10,5);
console.log('The result of sum 10 and 5 is '+resultOfSum4);

// Rest Parameters: We can use them when we don't know the exact number of parameters
// In this case we are indicating that the function can receive any number of parameters with the type number
function getAverageOfPeople(...x:number[]):number{
    let total = 0
    let count = 0;
    for(let i = 0; i<x.length;i++)
    {
        total += x[i];
        count++;
    }
    const result=total/count; // Const because the value inside the variable won't be edited on the future
    return result;
}

// Calling the function with the parameters
// 4 Parameters
let resultAverage1=getAverageOfPeople(10,20,30,40);
// 2 Parameters
let resultAverage2=getAverageOfPeople(10,20);
console.log('The result using 4 parameters is '+resultAverage1);
console.log('The result using 2 parameters is '+resultAverage2);





/* ----------------------------------- CLASSES ----------------------------------------- */

// Creating a Simple Class 

// I put an export here to import this class on module.ts
export class Car{
    // Attributes, by default the attributes are public
    brand:string;
    model:string;
    color:string;
    yearManufacture:number;

    // Constructor with parameters
    constructor(brand:string, model:string,color:string,yearManufacture:number){
        this.brand=brand;
        this.model = model;
        this.color=color;
        this.yearManufacture=yearManufacture;
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
    printInformation(){
        console.log('Data about the car: ');
        console.log('Brand : '+this.brand);
        console.log('Model : '+this.model);
        console.log('Color : '+this.color);
        console.log('Year : '+this.yearManufacture);
    }
}

// Creating the Car Object 
let car= new Car('Hyundai','Accent','Black',2012);
// Printing the Car Information
car.printInformation();
// Accesing the attributes
console.log('Car: '+car.brand+' - '+car.model);


// Inheritance 

// Creating Father/Base Class
class Person{
    // Attributes 
    private name:string;
    private age:number;
    private eyesColor:string;

    // Constructor
    constructor(name:string,age:number,eyesColor:string){
        this.name = name;
        this.age = age;
        this.eyesColor = eyesColor;
    }

    // Getters and Setters
    setName(name:string){
        this.name = name;
    }
    setAge(age:number){
        this.age = age;
    }
    setEyesColor(eyesColor:string){
        this.eyesColor=eyesColor;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEyesColor(){
        return this.eyesColor;
    }

    // Methods
    showInformation(){
        console.log(this.name+"'s Information");
        console.log('Age : '+this.age);
        console.log('EyesColor : '+this.eyesColor);
    }
    doEat(){
        console.log('I am eating');
    }
}

// Creating Son/Derivate Class
class Employee extends Person{
    // Attributes
    private monthlySalaryInDollars:number;
    private company:string;

    // Constructor with father's attributes and son's attributes
    constructor(name:string, age:number, eyesColor:string, monthlySalaryInDollars:number,company:string){
        super(name,age,eyesColor);
        this.monthlySalaryInDollars=monthlySalaryInDollars;
        this.company=company;
    }

    // Getters and setters
    setSalary(salary:number){
        this.monthlySalaryInDollars=salary;
    }
    setCompany(company:string){
        this.company=company;
    }
    getSalary(){
        return this.monthlySalaryInDollars;
    }
    getCompany(){
        return this.company;
    }

    // Methods
    // Displaying Information and Adding the Father Information
    showInformation(){
        super.showInformation();
        console.log('Monthly Salary In Dollars : '+this.monthlySalaryInDollars);
        console.log('Company : '+this.company);
    }

    // Simple Method
    doJob(){
        console.log('I am working');
    }

}

// Creating two objects

let person1 = new Person('Felipe',24,'Dark-Brown');
let employee = new Employee('Rodrigo',28,'Green',1600,'HP');

person1.showInformation();
person1.doEat();

employee.showInformation();
employee.doEat();
employee.doJob();





/* ----------------------------------- INTERFACES ----------------------------------------- */

// Creating an Interface
interface User{
    username: string;
    password?: string; // Optional
    email: string;

    registerUser();
    removeUser();
}

// Implementing the Interface
class Menu implements User{
    // Attributes
    menuOption:number = 0;
    // We need to define the values for each attribute of the interface
    username = 'Felipe';
    password = '4YTRf89g8';
    email ='myemail@gmai.com';

    // Displaying Menu
    displayMenu(){
        console.log('I am the Menu');
    }
    // Implementing the methods from the interface
    registerUser(){
        console.log('Registered the User with this information: ');
        console.log('Username: '+this.username);
        console.log('Password: '+this.password);
        console.log('Email: '+this.email);
    }
    removeUser(){
        console.log('Removed the user called '+this.username);
    }
}

// Creating the Menu
let menu1 = new Menu();
menu1.displayMenu();
menu1.registerUser();
menu1.removeUser();

// Also, we can use interfaces to define a new type of Data, like this:
interface appointmentCalendar {
    timeDate: Date;
    description: string;
    place: string;
}

// Creating the appointmentCalendar
let appointmentCalendar1: appointmentCalendar;
appointmentCalendar1 = {
    timeDate: new Date(Date.now()),
    description: "Learn Angular",
    place: "My Home Desktop"
}


/* ----------------------------------- GENERIC TYPES ----------------------------------------- */


// Creating a generic function that can receive any value type and return it
function returnAnyValue<T>(value: T): T {
    return value;
}

// Calling the function
let value1=returnAnyValue<number>(40);
let value2=returnAnyValue<string>('Hello World!');

// Printing the values
console.log('Printing value1 : '+value1+' and value2 '+value2);

// Also, we can create Generic Classes
class GenericClass<T>{
    // Generic Variable
    variable1:T;

    // Generic Method
    returnVar1(parameter:T):T{
        this.variable1=parameter;
        return this.variable1;
    }
}

let genericClass1 = new GenericClass<number>();
console.log('Return the parameter of the method : '+genericClass1.returnVar1(20));
console.log('Variable1 '+genericClass1.variable1);