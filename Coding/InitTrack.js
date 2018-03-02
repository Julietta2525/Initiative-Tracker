
//On Load Stuff
function loadingStuff () {
    document.getElementById("nameField").value = '';
}

//Check Button for Player Name
function checkButton () {
    var x = document.getElementById("nameField").value;
    document.getElementById("slate1").innerHTML = x;
}

//Clear the Player Name input box
function clearNameInput () {
    document.getElementById("nameField").value = "";
}

//New Player Popup Box
function newPlayerPopup() {
    newCharacterCard()
    var person = prompt("Please enter character name", "Frodo Baggins");
    if (person != null) {
        document.getElementById("slate1").innerHTML = person;
    }
}

// Create a "close" button and append it to each list item
//var myNodelist = document.getElementsById("slate1");
//var i;
//for (i =  0; i < myNodelist.length; i++) {
 // var div = document.createElement("DIV");
 // var txt = document.createTextNode("\u00D7");
 // span.className = "close";
 // span.appendChild(txt);
 // myNodelist[i].appendChild(span);
//}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("deleteCharButton");
var i;
for (i =  0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newCharacterCard() {
  var div = document.createElement("div");

} 


//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
//https://gomakethings.com/adding-a-new-element-to-the-dom-with-vanilla-js/
//https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
//http://www.javascriptkit.com/javatutors/dom2.shtml