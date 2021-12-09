// To execute it with NodeJS, we just need to do: node app.js
console.log('Hello World');


// -- NodeJS Globals
// a) setTimeout : This will execute the code after the specified time
setTimeout(() => {
    console.log('This message is printed after 3000 milliseconds (3 seconds)');
}, 3000);
// b) setInterval : This will execute the code each specified time
let count = 0;
const timer = setInterval(() => {
    console.log('This message is printed each 2000 milliseconds (2 seconds)');
    count += 2; //Count is increaded by 2 each time.
    console.log(`${count} seconds have passed`);
    if (count > 10) {
        clearInterval(timer); // The Interval will be stopped as soon as more than 10 seconds have passed
    }
}, 2000);
// c) __dirname : This will print the actual directory
console.log(__dirname);
// d) __filename : This will print the file name
console.log(__filename);


// -- NodeJS Function Expressions
// Normal Functions
function greet() {
    console.log("Hello World");
}
greet();
// Function Expression
let farewell = function () {
    console.log("Goodbye World!")
}
farewell();
// Passing a function as a parameter in another function
function callAnotherFunction(functionToCall) {
    functionToCall();
}
callAnotherFunction(greet);



// -- NodeJS Module and Require
// Modules allow us to split our code based on their functionality and topic
// Using require to import the module called helper (IMPORTING)
const loggingModule = require('./helper');
// IMPORTING
console.log(loggingModule.logging('Felipe'));
// NodeJS Module Export Patterns
// IMPORTING multiple functions
console.log('User : ' + loggingModule.user('Felipe'));
console.log('Id : ' + loggingModule.id('1168'));
console.log('Email : ' + loggingModule.email('email@gmail.com'));




// -- NodeJS Events Module/Emiters
// Importing the events
const events = require('events');
// Creating the event emiter
const myEmitter = new events.EventEmitter;
// Now we can use events
myEmitter.on('test', function (arg) {
    // When 'test' event occurs this will be executed 
    console.log(arg);
});
// Emitting the 'test' event, so everything inside the 'test event will be executed
// The first parameter is the name of the event and the second one is the parameter for the function
myEmitter.emit('test', 'I am the Test Function');




// -- NodeJS Util Module
// Doing the import
const util = require('util');
// Creating a simple function
const teams = function (name) {
    this.name = name;
};
// Using util
util.inherits(teams, events.EventEmitter);
const Arsenal = new teams('Arsenal');
const Juventus = new teams('Juventus');
const Galatasaray = new teams('Galatasaray');
const teamArray = [Arsenal, Juventus, Galatasaray];
// Attaching Listeners to each team
teamArray.forEach((team) => {
    team.on('nation', function (nation) {
        console.log("I am " + team.name + ' and I am from ' + nation);
    });
});
Arsenal.emit('nation', 'England');
Juventus.emit('nation', 'Italy');
Galatasaray.emit('nation', 'Turkey');


// -- NodeJS Reading and Writing Files 
const fs = require('fs');
// SYNCHRONOUS
// Reading the file and any other code after this won't be executed
// Name of the file, character enconding
const textFile = fs.readFileSync('read-me.txt', 'utf-8');
// Pring the text file
console.log(textFile);
// Writting the text on another file
// File to write, text to write
fs.writeFileSync('write-me.txt', textFile);
// ASYNCHRONOUS
fs.readFile('read-me.txt', 'utf-8', function (error, data) {
    // This is executed when the file is complete read
    console.log('The data was read from the file');
    fs.writeFileSync('write-me2.txt', data, function (error) {
        if (error) {
            console.log('An error was found while reading the file, here is the error: ' + error);
        }
    })
});
console.log('I am executed before the file is read because readFile is asynchronous');


// -- NodeJS Create and Remove Directories/Files
// Creating/Removing a file ASYNCHRONOUS
fs.writeFileSync('myFile.txt', 'data');
fs.unlink('myFile.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("No errors were found at the moment of deleting the file");
    }
})
// Creating a directory SYNCHRONOUS
fs.mkdirSync('myNewFolder');
// Removing the directory SYNCHRONOUS
fs.rmdirSync('myNewFolder');
// Creating a directory ASYNCHRONOUS
fs.mkdir('myNewFolder2', () => {
    // The file will be read when the directory is created
    fs.readFile('read-me.txt', 'utf-8', (error, data) => {
        if (!error) {
            console.log('The file was read without issues, here is the information');
            console.log(data);
            // Now we are going to create a file inside the folder that was created
            fs.writeFile('./myNewFolder2/write-me.txt', data, function (error) {
                if (error) {
                    console.log('An error was found, here is the error: ' + error);
                    console.log(error);
                } else {
                    // Now removing  the file to remove the folder 
                    fs.unlink('./myNewFolder2/write-me.txt', function (error) {
                        if (error) {
                            console.log('An error was found, here is the error: ' + error);
                            console.log(error);
                        } else {
                            // Finally removing the folder
                            fs.rmdir('myNewFolder2',(error) =>{
                                if(error){
                                    console.log(error);
                                }else{
                                    console.log("Folder and files were removed without issues");
                                }
                            })
                        }
                    })
                }

            })
        }
    })
});