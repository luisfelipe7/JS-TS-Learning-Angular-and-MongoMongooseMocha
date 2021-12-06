/**
 * Author: Felipe Castro
 * File: Basic.js
 * Information: File with multiple topic to learn JavaScript
 */


/* ------------------------- BASIC DEFINITION  ------------------------------ */

// Starting my basic JavaScript File 
console.log("I am an external JavaScript File, Hello Everyone!");

console.log("Learning the fundamental concepts of JavaScript");


// Declaring a Variable
var nameOfMyVariable = 'Value of my variable';
console.log("Printing the value of nameOfMyVariable : " + nameOfMyVariable);

// I can define multiple values without indicating the type
var isDead = false;
var myAge = 24;
console.log("My variables values are :");
console.log("isDead: " + isDead);
console.log("myAge: " + myAge);
// Defining a new value for my variable
isDead = 'I am dead';
console.log("My new value of isDead: " + isDead);

/* I can change the type of value that I am storing in a variable without having to declare a new one 
 or set the type */

// If I didn't set a value the default value will be undefined
var myVar;
console.log("Printing a variable without a value : " + myVar);
myVar = 'My Var';
console.log("New value of the variable that was without a value : " + myVar);

// Printing multiple values
var myName = 'Felipe';
var myLastName = 'Castro';
console.log("My name is " + myName + " and my last name is " + myLastName + " and my age is " + myAge);

// Defining two variables at the same time
var myVar1, myVar2;
myVar1 = 'LearningJS';
myVar2 = 'Thanks to Udemy';

console.log(myVar1 + " - " + myVar2);

// This will display a pop-up alert message
alert("Message inside a pop-up alert");

// Capture data from the browser and save it to a variable
var valueEntered = prompt('How are you doing today?');
console.log('He is ' + valueEntered + ' today');


/* ------------------------- OPERATORS  ------------------------------ */

// Checking the operators
var number1 = 2;
var number2 = 18;

console.log("The sum of " + number1 + " and " + number2 + " is : " + (number1 + number2));
console.log("The divison of " + number2 + " and " + number1 + " is : " + (number2 / number1));
console.log("The residue of " + number2 + " and " + number1 + " is : " + (number2 % number1));
console.log("Is " + number2 + " greater than " + number1 + "? Answer: " + (number2 > number1));


/* ------------------------- BOOLEANS  ------------------------------ */

// Checking the booleans 
var number3 = 4;
var myVar3 = '4';
var number4 = 4;

console.log("Checking if " + number3 + " is == to " + number4 + " : " + (number3 == number4));
console.log("Checking if " + number3 + " is == to '" + myVar3 + "' : " + (number3 == myVar3));
console.log("Checking if " + number3 + " is === to " + number4 + " : " + (number3 === number4));
console.log("Checking if " + number3 + " is === to '" + myVar3 + "' : " + (number3 === myVar3));
console.log("Checking if " + number3 + " is !== to '" + myVar3 + "' : " + (number3 !== myVar3));

/* ------------------------- CONDITIONALS  ------------------------------ */

// Checking the conditionals 
var myGrade = 69;

if (myGrade >= 70) {
    console.log('You passed the course with a ' + myGrade);
} else if (myGrade >= 60) {
    console.log("You can take summer classes to pass the course, you have a " + myGrade);
} else {
    console.log("You didn't pass the course with a " + myGrade);
}


// QUIZ 1 - Solution with Conditionals
var ageOfCustomer = 10;
if (ageOfCustomer >= 23) {
    console.log("Welcome, you can enter the cafe and drink alcohol because you are " + ageOfCustomer + " years old");
} else if ((ageOfCustomer >= 18) && (ageOfCustomer < 23)) {
    console.log("Welcome, you can enter but you can only drink coffee because you are " + ageOfCustomer + " years old");
} else {
    console.log("You can't enter the cafe because you are " + ageOfCustomer + " years old");
}

// Ternary Operator
var valueToCheck = 4;
(valueToCheck >= 4) ? console.log('The value is >= to 4') : console.log('The value is minus than 4');


// Switch Statements
var myId = '116890';
switch (myId[0]) {
    case '1':
        console.log('Based on your id ' + myId + ' you were born on San José');
        break;
    case '4':
        console.log('Based on your id ' + myId + ' you were born on Heredia');
        break;
    default:
        console.log('Based on your id ' + myId + " we can't define the province where you were born");
        break;
}

// QUIZ 2 - Solution with Conditionals using Switches

var alexAverage = ((90 + 80 + 95) / 3);
var saraAverage = ((89 + 86 + 98) / 3);
var nancyAverage = ((42 + 98 + 83) / 3);
var foundTheHighestAverage = false;

console.log('The averages of each person are: ');
console.log('Alex: ' + alexAverage);
console.log('Sara: ' + saraAverage);
console.log('Nancy: ' + nancyAverage);

switch (true) {
    case ((nancyAverage == alexAverage) && (nancyAverage > saraAverage)):
        console.log('Nancy and Alex have the highest average');
        break;
    case ((saraAverage == alexAverage) && (saraAverage > nancyAverage)):
        console.log('Sara and Alex have the highest average');
        break;
    case ((saraAverage == nancyAverage) && (saraAverage > alexAverage)):
        console.log('Sara and Nancy have the highest average');
        break;
    case ((saraAverage == nancyAverage) && (saraAverage == alexAverage)):
        console.log('Sara, Alex and Nancy have the highest average');
        break;
    case ((alexAverage > saraAverage) && (alexAverage > nancyAverage)):
        console.log('Alex has the highest average');
        break;
    case ((saraAverage > alexAverage) && (saraAverage > nancyAverage)):
        console.log('Sara has the highest average');
        break;
    case ((nancyAverage > alexAverage) && (nancyAverage > saraAverage)):
        console.log('Sara has the highest average');
        break;
    default:
        console.log('Not found the highest average');
        break;
}


/* ------------------------- CONDITIONALS  ------------------------------ */

// Create DRY Code , DRY Means : DO NOT REPEAT YOURSELF 

// Printing numbers until the variable is equal to 11
var numberToIncrease = 0;

while (numberToIncrease < 11) {
    console.log('- ' + numberToIncrease);
    numberToIncrease++; //This is the same as doing numberToIncrease=numberToIncrease+1;
}

// QUIZ - While Loops
var number6 = 132;

// Printing even numbers from 132 to 148 on the console 
while (number6 < 149) {
    if ((number6 % 2) == 0) {
        console.log('The number ' + number6 + ' is even');
    }
    number6++;
}

// Printing numbers between 25 and 100, divisible by 7
var number7 = 26;
while (number7 <= 100) {
    if ((number7 % 7) == 0) {
        console.log('The number ' + number7 + ' is divisible by 7');
    }
    number7++;
}

// For Loops 

// Printing even numbers from 0 to 10
for (var number8 = 0; number8 <= 10; number8++) {
    if (number8 % 2 == 0) {
        console.log("I am the even number " + number8);
    }
}

// QUIZ - For Loops 

// Printing odd numbers from 132 to 148 on the console 
for (var number9 = 132; number9 <= 148; number9++) {
    if (!(number9 % 2 == 0)) {
        console.log("I am the odd number " + number9);
    }
}

// Printing numbers between 25 and 100, divisible by 7 and 5
for (var number10 = 25; number10 <= 100; number10++) {
    if ((number10 % 7 == 0) && (number10 % 5 == 0)) {
        console.log("I am the number " + number10 + " between 25 and 100, also divisible by 7 and 5");
    }
}

// Continue and Break Statement

// Continue will skip everything inside the loop and continue to the next iteration
console.log("Printing the odd numbers from 0 to 10");
for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) continue;
    console.log("Printing the odd number: " + i);
}

// Break will exit the complete loop 
console.log("Printing the numbers until we find a number divisible by 5");
for (var y = 1; y <= 10; y++) {
    if (y % 5 == 0) break;
    console.log("Printing the number " + y);
}



/* ------------------------- FUNCTIONS  ------------------------------ */

// Declaring a Function, it won't run until a call it
function sayHello() {
    console.log("Hello World!");
}

// Calling the function
sayHello();


// Using Functions with Arguments

function displayMessage(message) {
    alert(message);
}

displayMessage("Hi :) , This is my Message!");

// Creating a new function 

function potence(base, exponent) {
    return Math.pow(base, exponent);
}

console.log("The result of increasing 4 to 2 is " + potence(4, 2));

// Difference between function declaration and expression 

// Using a function expression
var calculateEven = function (value) {
    return (value % 2 == 0);
}
var result = calculateEven(4);
console.log("The number 4 is even? Answer: " + result);

// With the function expression we can change the value to be a variable instead of a function 
calculateEven = 4;

console.log("New value of the variable calculateEven " + calculateEven);

// QUIZ - Functions

function subtraction(x, y) {
    return x - y;
}

function isOdd(x) {
    var result = false;
    (!(x % 2 == 0)) ? result = true : result = false;
    return result;
}

function addition(x) {
    var total = x;
    for (var i = 1; i <= x; i++) {
        total += i;
    }
    return total;
}

// Calling the methods for the QUIZ 
console.log("Result of substraction : " + subtraction(4, 2));
console.log("Is 27 odd? Answer : " + isOdd(27));
console.log("Result of addition : " + addition(2));


/* ------------------------- FUNCTIONS SCOPE  ------------------------------ */

// I can access variables declared out of functions and use them inside functions 

var number11 = 10;
console.log("Value of number11 : " + number11);

function increasingNumber11() {
    number11++;
}

increasingNumber11();
console.log('Value of number11 after calling the function : ' + number11);


// I can't access variables declared inside of functions

function simpleTest() {
    var number12 = 10;
}

simpleTest();

// This will cause an error because I am using a variable declared inside a function:
// console.log("Trying to access a variable declared inside a function "+number12);


/* ------------------------- Arrays  ------------------------------ */

// You just need to use brackets to define an array
var people = ['Felipe', 'Yenifer', 'Esteban', 'Kimberly'];
people.push('Elias');

// Printing the array
console.log("Here is my array: " + people);

// Accesing an element
console.log("Here is the element located in the first position " + people[0]);

// Declaring an array using a different way
var students = [];
students = new Array();

students.push('ValueAt0');

var students_length = students.length;

console.log("Here is the value of students: " + students + " and the length of students: " + students_length);

// Common methods on the arrays : 
/* 
push: Add element at the end of the array
pop: Remove element at the end of the array 
unshift: Add element at the beginning of the array
shift: Remove element at the beginning of the array 
*/

// QUIZ - Arrays  

// 1) Access the last element of the books array using the length of the array and print it to the console

var books = ['Harry Potter', 'Hobbit', 'Hunger Games', 'Little Prince'];

console.log("This is the last element of the books array: " + books[books.length - 1]);

// 2) Print the godFather3 film from the films array to the console

var films = [['hobbit1', 'hobbit2', 'hobbit3'], ['matrix', 'matrix2', 'matrix3'], ['godFather1', 'godFather2', 'godFather3']]

console.log("Printing the godFather3:  " + ((films[2])[2]));


/* ------------------------- Iterators  ------------------------------ */


// Using the books array we are going to iterate using a for loop
for (var i = 0; i < books.length; i++) {
    console.log("Printing the book located in the position " + i + " : " + books[i]);
}

// Using the films array to iterate using a for loop
for (var x = 0; x < films.length; x++) {
    for (var y = 0; y < (films[x].length); y++) {
        console.log("Printing the film located in the position [" + x + "] [" + y + "] " + films[x][y]);
    }
}

// Using foreach to iterate over the books array
// Way #1
books.forEach(function (book) {
    console.log(book);
});
// Way #2
books.forEach(element => console.log(element));


// QUIZ - Iterators

// 1) Create an array which includes numbers beween 0 and 20 by using 'push' method 
var QUIZNumbersArray = [];

for (var i = 0; i <= 20; i++) {
    QUIZNumbersArray.push(i);
}

console.log("Printing the array of numbers for the QUIZ " + QUIZNumbersArray);

// 2) By using this array you created in the first question, you will print the numbers that can be divided by 5 to the console and using the 'for each' method

QUIZNumbersArray.forEach(function (number) {
    if (number % 5 == 0) {
        console.log("I can be divided by 5, I am the number " + number);
    }
});


/* ------------------------- OBJECTS  ------------------------------ */

// Creating an object 

var student = { name: 'Felipe', age: 24, university: 'UNA' };
var student2 = { name: 'Yenifer', age: 25, university: 'UNA' };

var students = [student, student2];

console.log("Printing the students ");

students.forEach(function (student) {
    console.log("Student Information: ");
    console.log(student.name); // or student["name"]
    console.log(student.age);
    console.log(student.university);
});

// Creating simple function to print the student information
function printStudentInformation(student) {
    console.log(student.name); // or student["name"]
    console.log(student.age);
    console.log(student.university);
}

// Updating an object

var student3 = { name: 'Esteban', age: 24, university: 'UNA' };
printStudentInformation(student3);

student3.university = 'Cenfotec';
console.log("Printing again object after updating the information");
printStudentInformation(student3);

// Putting objects and array inside the object 

var student4 = {
    name: 'Kimberly',
    age: 24,
    university: 'UNA',
    friends: [student3, student2],
    cat: {
        name: "Luna",
        color: "Gray"
    }
}

var nameOfTheCat = student4.cat.name;
printStudentInformation(student4);
console.log("Cat name : " + nameOfTheCat);
console.log("Friends Information: ");
for (var i = 0; i < student4.friends.length; i++) {
    printStudentInformation(student4.friends[i]);
}

// Adding Property to the objects 

// Adding City to the Student4 

student4.city = "Heredia";

// Adding Array of Enemies 

student4.enemies = [student, student2];

// Adding an object 

student4.job = {
    position: "QA",
    company: "Evertec"
}


// Objects QUIZ

function createUniverisity(Name, HasGone, Year) {
    var tempUniverisity = {
        name: Name,
        hasGone: HasGone,
        year: Year
    }
    return tempUniverisity;
}

function printUniverisityInformation(university) {
    console.log("University Information :");
    console.log("Name: " + university.name);
    console.log("Year: " + university.year);
}

var university1 = createUniverisity("UNA", false, 1890);
var university3 = createUniverisity("UX", true, 1885);

var universities = [university1, university2, university3];
var university2 = createUniverisity("TEC", false, 1880);

universities.forEach(function (university) {
    if (!(university.hasGone)) {
        printUniverisityInformation(university);
    }
})

// Adding methods to the objects

var student5 = {
    name: 'Federico',
    age: 24,
    university: 'UNA',
    friends: [student4, student],
    cat: {
        name: "Pana",
        color: "Yellow"
    },
    greet: function () { // Putting the function inside the object
        console.log("Hello, I am " + this.name + ", nice to meet you"); // "this" will take the object
    }
}

console.log("Student5 wants to say Hi: ");
student5.greet();

/* ------------------------- OBJECTS  ------------------------------ */

// This will print the window object 
console.log(this);