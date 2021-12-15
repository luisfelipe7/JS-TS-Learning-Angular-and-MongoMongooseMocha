/**
 * Author: Felipe Castro
 * File: script.js
 * Information: Practicing JavaScript and manipulating the HTML
 * How to run this file: Just open the index.html file on the browser
 */

// ------------------------- Manipulating the Elements on the HTML -------------------------

// Manipulating h1 tag
var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

// Changing the color of the body
var isBlue = false;
var bodyElement = document.querySelector('body');

setInterval(function () {
    if (isBlue) {
        bodyElement.style.background = 'white';
    } else {
        bodyElement.style.background = '#0099ff';
    }
    isBlue = !isBlue;
}, 2000);


// ------------------------- Select Methods on the HTML -------------------------


// 1) GetElementById

var myParagraph = document.getElementById('paragraph');
myParagraph.style.background = '#ccffff';

// 2) GetElementsByClass

var myElementsWithBackgroundClass = document.getElementsByClassName('background');

// Using this for or with a normal loop /  We can't use for each because it is an foreach
for (let element of myElementsWithBackgroundClass) {
    element.style.fontSize = '200%';
}

// 3) GetElementByTagName

// This will get all the elements having the h1 tag
var myElementsWithH1TagName = document.getElementsByTagName('h1');

// Modifying the elements on the array 
for (let element of myElementsWithH1TagName) {
    element.style.border = 'orange';
    element.style.borderSolid = 'orange';
    element.style.borderStyle = 'double';
    element.style.borderWidth = '5px';
}

// 4) QuerySelector

// It is based on CSS

// This will get only the first element having the h1 tag
var firstH1Element = document.querySelector('h1');
firstH1Element.style.opacity = 0.5;

// Indicating the # because we are searching based on the id (CSS)
var myParagraphWithQS = document.querySelector('#paragraph');
console.log(myParagraphWithQS);

// Indicating the . because we are searching based on the class (CSS)
var myFirstElementWithBackgroundClass = document.querySelector('.background');
console.log(myFirstElementWithBackgroundClass);

// 5) QuerySelectorAll

// Indicating the . because we are searching based on the class (CSS)
var allElementsWithBackgroundClass = document.querySelectorAll('.background');
console.log(allElementsWithBackgroundClass);


// ------------------------- Manipulation Methods on the HTML -------------------------


// 1) Changing the style of an element

var divWithClassBackground2 = document.querySelector('.background2');

/* NOT DRY VERSION, We are using a lot of lines to make the changes
divWithClassBackground2.style.height = '50px';
divWithClassBackground2.style.width = '400px';
divWithClassBackground2.style.backgroundColor='gray';
divWithClassBackground2.style.fontSize= '30px';
divWithClassBackground2.style.border= '5px solid black';
*/

// We are not using Background-Color (CSS Format), because we are making the change with JavaScript


// 2) Adding/Removing classes 

// DRY Version, Just adding the class called myClass
divWithClassBackground2.classList.add('myClass');

// Remove the class called myClass
divWithClassBackground2.classList.remove('myClass');

// Toggle is in charge of adding the class if it is not part of the element and remove if it is already present
divWithClassBackground2.classList.toggle('myClass');

// 3) Change the content of an element

var paragraphToModify = document.querySelector('#paragraph2');

console.log("Printing the text inside the paragraph: " + paragraphToModify.textContent);

// At the moment of doing this we have to be careful because the <strong> tag will be removed
// paragraphToModify.textContent = "Learning how to use Javascript and Angular with Udemy";

// This one is better because it keeps the tags inside the element
console.log("Print the html inside the element (paragraph) : " + paragraphToModify.innerHTML);
// So in this way we can keep the strong tag
paragraphToModify.innerHTML = "Learning how to use <strong>Javascript and Angular </strong> with Udemy";


// 4) Change the Attributes

var linkElement = document.querySelector('a');

// Getting the attribute
console.log('Value of the attribute href: ' + linkElement.getAttribute('href'));
// Modifying the attributes
linkElement.setAttribute('href', 'https://www.google.com/');
linkElement.innerHTML = 'Go to Google Site';


// ------------------------- Event Handlers -------------------------

// 1) Click to a button

var button = document.querySelector('#button1');
var bodyTitle = document.querySelector('#bodyTitle');


// Adding the listener

button.addEventListener('click', function () {
    alert('You clicked the button !');
    bodyTitle.style.backgroundColor = 'green';
});

// Playing with an UL

var listAnimals = document.querySelector('ul');
var alreadyClicked = false;

listAnimals.addEventListener('click', function () {
    console.log('You clicked the list');
    if (!alreadyClicked) {
        listAnimals.style.backgroundColor = 'gold';
        alreadyClicked = true;
    } else {
        alreadyClicked = false;
        listAnimals.style.backgroundColor = 'white';
    }
});

// QUIZ - Event Handlers

var item1 = document.querySelector('#listItem1');
var item2 = document.querySelector('#listItem2');
var item3 = document.querySelector('#listItem3');

var itemListClickArray = [false, false, false];

item1.addEventListener('click', function () {
    console.log("Text of Item1 " + item1.textContent);
    item1.style.backgroundColor = 'red';

});
item2.addEventListener('click', function () {
    console.log("Text of Item2 " + item2.textContent);
    item2.style.backgroundColor = 'white';

});
item3.addEventListener('click', function () {
    console.log("Text of Item3" + item3.textContent);
    item3.style.backgroundColor = 'blue';
});

// Toggle: Click to Change it and Click Again the Element it's back to the original state


var paragraphToHover = document.querySelector('#paragraph2');

function toggleBackground() {
    paragraphToHover.classList.toggle('toggleBackground');
}

// Just call the function when I click the button
paragraphToHover.addEventListener('click', toggleBackground);


// 2) Hover on something

// Getting the list of Items

let listOfTodoItems = document.querySelectorAll('.toDoItem');

for (let i = 0; i < listOfTodoItems.length; i++) {
    listOfTodoItems[i].addEventListener('mouseover', function () {
        // Put the color when the mouse is on the item
        listOfTodoItems[i].classList.add('mouseEnterItem');

        /* Reset the color after a short delay
        setTimeout(function () {
            listOfTodoItems[i].classList.remove('mouseEnterItem');
        }, 500); */

    });

    listOfTodoItems[i].addEventListener('mouseout', function () {
        // Reset the color 
        listOfTodoItems[i].classList.remove('mouseEnterItem');
    });

    listOfTodoItems[i].addEventListener('click', function () {
        if (!(listOfTodoItems[i].innerHTML.includes('<strike>'))) {
            listOfTodoItems[i].innerHTML = "<strike>" + listOfTodoItems[i].innerHTML + "</strike>";
            console.log("Clicking the element");
        }
    });
}



