/** 
*
* Author: Felipe Castro
* File: script.js
* Information: Practicing JQuery and Ajax
* How to run it: Open the index.html and it will be in charge of importing this script
*
*/

// ------------------------- Using Ajax -------------------------

console.log("Using Ajax!");

// Ajax function that will be activated when we click the gif
function changeGif() {
    var xhttp = new XMLHttpRequest();
    var originalGif = "https://i.pinimg.com/originals/0d/c9/68/0dc968448592a7d533096b74c263cc40.gif";
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Everything is good, the response was received 
            var gifElement = document.querySelector('#movingGif');
            if (gifElement.src == originalGif) {
                gifElement.src = this.responseText;
            } else {
                gifElement.src = originalGif;
            }
        } else {
            // Not ready yet, loading the response
        }
    };
    xhttp.open("GET", "gif.txt", true);
    xhttp.send();
}

// Reading an XML File and creating a Table using Ajax 
function generateTable() {
    console.log("Generating Table");
    // Creating the HTTP Request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        // Checking the status code and the ready state to verify the answer was received
        if (this.readyState == 4 && this.status == 200) {
            console.log("MyXML: " + this.responseXML);
            var buttonTable = document.querySelector('#buttonTable');
            // Checking if we need to show the table or hide it
            if (buttonTable.textContent == 'Press to show table') {
                buttonTable.textContent = 'Press to hide table';
                // Capturing the XML File and send it to the function
                createTable(this.responseXML);
            }else{
                buttonTable.textContent = 'Press to show table';
                // Hiding the table
                var divToAddTheTable = document.querySelector('#showTable');
                divToAddTheTable.innerHTML='';
            }
        } else {
            // No answer received
        }
    };
    xhttp.open("GET", "myXML.xml", true);
    xhttp.send();
}

// Method to create the table with the XML file
function createTable(xmlFile) {
    // Constructing the table
    var nameOfStore = (((xmlFile.getElementsByTagName('videogames_list'))[0]).getAttribute('store'));
    console.log("Printing the name " + nameOfStore);
    var table = "<br><table id='gamesTable' border='5' bgcolor='#A4CED2' style='width:400px; border: 4px solid rgb(62, 67, 112)'><tr bgcolor='#095158' style='color:white'><td colspan='5'><center>Store " + nameOfStore + "</center> </td> </tr><tr bgcolor='#095158' style='color:white'><td colspan='5'>List of Games<br></td></tr>";
    table += "<tr bgcolor='#095158' style='color:white'><td>Name</td><td>Platfforms</td><td>Price</td><td>Available</td><td>Quantity</td></tr>";
    // Obtaining the elements
    var listOfVideoGames = xmlFile.getElementsByTagName('videogame');
    for (var y = 0; y < listOfVideoGames.length; y++) {
        // Building the rows of elements
        table += "<tr><td>" +
            listOfVideoGames[y].getAttribute('name') + "</td><td>";
        // Moving through the platforms for the game
        var platforms = '';
        var consoles = listOfVideoGames[y].getElementsByTagName('platforms')[0].getElementsByTagName('console');
        for (var z = 0; z < consoles.length; z++) {
            platforms += ' ' + (consoles[z].childNodes[0].nodeValue);
        }
        // Inserting the consoles 
        table += platforms + '</td><td>' +
            // Adding the other attributes
            listOfVideoGames[y].getElementsByTagName('price')[0].childNodes[0].nodeValue + "</td>";
        // Verifying if the game is available
        if ((listOfVideoGames[y].getElementsByTagName('available')[0].childNodes[0].nodeValue) == 'true') {
            table += "<td style='color:green'>" + "Yes</td><td>";
        } else {
            table += "<td style='color:red'>" + "No</td><td>";
        }
        table += listOfVideoGames[y].getElementsByTagName('quantity')[0].childNodes[0].nodeValue + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    var divToAddTheTable = document.querySelector('#showTable');
    // Inserting the table in the div
    divToAddTheTable.innerHTML = table;
}




// ---------------------------- Using JQuery ----------------------------


// When the document is fully loaded I am going to apply the JQuery functions indicated inside
$(document).ready(function(){
    console.log('My document is loaded and ready to apply the css functions');

    // First function to apply: When clicking on h4 it will hide the same element
    $('h4').click(function(){
        $(this).hide();
    });
    // Second function to apply: When clicking on the button it will hide the header
    $('#hideHeader1').click(function(){
        $('.sectionHeader1').hide();
    });
    // Third function to apply: When inserting the mouse into the paragraph it will change the color of the text and the background color
    $('#paragraph1').mouseenter(function(){
        $(this).addClass('mouseEnterParagraph1');
    });
    // Fourth function to apply: When the mouse leaves the paragraph it will remove the class when the mouse entered 
    $('#paragraph1').mouseleave(function(){
        $(this).removeClass('mouseEnterParagraph1');
    });
    // Five function to Apply: When I double click on the table it will make an animation
    $('#showTable').dblclick(function(){
        $('#gamesTable').animate({
            left: '4000px',
            opacity: '1',
            height: '500px',
            width: '500px'
        });
    });
    // Six Function to Apply: When I click the header it will make an animation
    $('.sectionHeader1').click(function(){
        $(this).css("color","yellow").slideUp(1500).slideDown(1500);
    });

    // Seven Function to be Apply: When I double click the function paragraph it will display the attributes
    $('#paragraph1').dblclick(function(){
        alert('Value of text : '+$(this).text()+' , htmL : '+$(this).html()+' ,and value of form fields : '+$(this).val());
        alert('Value of attribute : '+$(this).attr('class'));
    });

    // Eight Function to Apply: When I click the Header the html,text and value will change
    $('#initialHeader').click(function(){
        $(this).text('Learning about the videogames');
        $(this).html('<i> Having fun with the videogames! </i>');
        $(this).val('Changing the value of the element');
    });

});

