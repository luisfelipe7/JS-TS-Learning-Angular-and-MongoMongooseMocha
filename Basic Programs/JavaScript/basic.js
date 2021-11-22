/* ////////////////////////// BASIC DEFINITION  /////////////////////////////// */

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


/* ////////////////////////// OPERATORS  /////////////////////////////// */

// Checking the operators
var number1 = 2;
var number2 = 18;

console.log("The sum of " + number1 + " and " + number2 + " is : " + (number1 + number2));
console.log("The divison of " + number2 + " and " + number1 + " is : " + (number2 / number1));
console.log("The residue of " + number2 + " and " + number1 + " is : " + (number2 % number1));
console.log("Is " + number2 + " greater than " + number1 + "? Answer: " + (number2 > number1));


/* ////////////////////////// BOOLEANS  /////////////////////////////// */

// Checking the booleans 
var number3 = 4;
var myVar3 = '4';
var number4 = 4;

console.log("Checking if " + number3 + " is == to " + number4 + " : " + (number3 == number4));
console.log("Checking if " + number3 + " is == to '" + myVar3 + "' : " + (number3 == myVar3));
console.log("Checking if " + number3 + " is === to " + number4 + " : " + (number3 === number4));
console.log("Checking if " + number3 + " is === to '" + myVar3 + "' : " + (number3 === myVar3));
console.log("Checking if " + number3 + " is !== to '" + myVar3 + "' : " + (number3 !== myVar3));

/* ////////////////////////// CONDITIONALS  /////////////////////////////// */

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


/* ////////////////////////// CONDITIONALS  /////////////////////////////// */

// Create DRY Code , DRY Means : DO NOT REPEAT YOURSELF 

// Printing numbers until the variable is equal to 11
var numberToIncrease=0;  

while(numberToIncrease<11){
    console.log('- '+numberToIncrease);
    numberToIncrease++; //This is the same as doing numberToIncrease=numberToIncrease+1;
}

// QUIZ - While Loops
var number6=132;

// Printing even numbers from 132 to 148 on the console 
while(number6<149){
    if((number6%2)==0){
        console.log('The number '+number6+' is even');
    }
    number6++;
}

// Printing numbers between 25 and 100, divisible by 7
var number7=26;
while(number7<=100){
    if((number7%7)==0){
        console.log('The number '+number7+' is divisible by 7');
    }
    number7++;
}

// For Loops 

// Printing even numbers from 0 to 10
for(var number8=0;number8<=10;number8++){
    if(number8%2==0){
        console.log("I am the even number "+number8);
    }
}

// Quiz - For Loops 

// Printing odd numbers from 132 to 148 on the console 
for(var number9=132;number9<=148;number9++){
    if(!(number9%2==0)){
        console.log("I am the odd number "+number9);
    }
}

// Printing numbers between 25 and 100, divisible by 7 and 5
for(var number10=25;number10<=100;number10++){
    if((number10%7==0)&&(number10%5==0)){
        console.log("I am the number "+number10+ " between 25 and 100, also divisible by 7 and 5");
    }
}

// Continue and Break Statement

// Continue will skip everything inside the loop and continue to the next iteration
console.log("Printing the odd numbers from 0 to 10");
for(var i=0;i<=10;i++){
    if(i%2==0) continue;
    console.log("Printing the odd number: "+i);
}

// Break will exit the complete loop 
console.log("Printing the numbers until we find a number divisible by 5");
for(var y=1; y<=10;y++){
    if(y%5==0) break;
    console.log("Printing the number "+y);
}



/* ////////////////////////// FUNCTIONS  /////////////////////////////// */

// Declaring a Function, it won't run until a call it
function sayHello(){
    console.log("Hello World!");
}

// Calling the function
sayHello();


// Using Functions with Arguments

function displayMessage(message){
    alert(message);
}

displayMessage("Hi :) , This is my Message!");

// Creating a new function 

function potence(base, exponent){
    return Math.pow(base,exponent);
}

console.log("The result of increasing 4 to 2 is "+potence(4,2));

// Difference between function declaration and expression 

// Using a function expression
var calculateEven = function (value){
    return (value%2==0);
}
var result = calculateEven(4);
console.log("The number 4 is even? Answer: "+result);

// With the function expression we can change the value to be a variable instead of a function 
calculateEven = 4; 

console.log("New value of the variable calculateEven "+calculateEven);

// Quiz - Functions

function subtraction(x,y){
    return x- y;
}

function isOdd(x){
    var result=false;
    (!(x%2==0)) ? result=true : result=false;
    return result;
}

function addition(x){
    var total=x;
    for(var i=1; i<=x; i++){
        total+=i;
    }
    return total;
}

// Calling the methods for the quiz 
console.log("Result of substraction : "+subtraction(4,2));
console.log("Is 27 odd? Answer : "+isOdd(27));
console.log("Result of addition : "+addition(2));


/* ////////////////////////// FUNCTIONS SCOPE  /////////////////////////////// */

// I can access variables declared out of functions and use them inside functions 

var number11 = 10;
console.log("Value of number11 : "+number11);

function increasingNumber11(){
    number11++;
}

increasingNumber11();
console.log('Value of number11 after calling the function : '+number11);


// I can't access variables declared inside of functions

function simpleTest(){
    var number12 = 10; 
}

simpleTest();

// This will cause an error because I am using a variable declared inside a function:
// console.log("Trying to access a variable declared inside a function "+number12);


/* ////////////////////////// Arrays  /////////////////////////////// */


