function loadingStuff () {
    addCloseButtons();
    addEditButton();
}

function newPlayerButton() {
    newCharLine();
    addCloseButtons();
}

function newIdNameEdit () {
    document.getElementsByClassName("LI").className = "nameDisplay";
}

function addEditButton () {
   // Create an "edit" button and append it to each list item
   var myNodelist = document.getElementsByTagName("LI");
   var i;
   for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Edit");
        span.className = "edit";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    var list = document.querySelector(".edit");
    list.addEventListener("click", editBox);
}

function addCloseButtons() {
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        }
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

// Create a new list item when clicking on the "Add" button
function newCharLine(){
    var li = document.createElement("li");
    var inputValue = prompt("Enter character name!", "Steve the Epic Unicorn");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You sassing me with that?");
    } else if (inputValue == null) {
        txt = "";
    } else {
        document.getElementById("charCard").appendChild(li);
    }
    li.className = "nameDisplay";
//add close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 1; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
      }
    }
//add edit button
    var div = document.createElement("div");
    var txt = document.createTextNode("Edit");
    div.className = "edit";
    div.appendChild(txt);
    li.appendChild(div);
    var editClick = document.querySelectorAll(".edit");
    var i;
    for (i = 1; i < editClick.length; i++) {
        editClick[i].addEventListener("click", editBox);
    }
}

function editBox() {
    var list = document.querySelector("ul");
    var editlist = document.querySelector("nameDisplay");
    list.contentEditable = true;

//var modal = document.getElementById("myModal");
/////var span = document.getElementsByClassName("cancelButton")[0];

//modal.style.display = "block";
//window.onclick = function(event) { 
    //if (event.target == modal) {
        //modal.style.display = "none";
    //}
//}

//create input box
    //var inputBox = document.createElement("INPUT");
    //inputBox.setAttribute("type", "text");
    //inputBox.className = "newInput";
    //document.getElementById("charCard").appendChild(inputBox);

//create confirm button
    //var confirmButton = document.createElement("BUTTON");
    //var buttonText = document.createTextNode("OK");
    //confirmButton.className = "confirmButton";
    //confirmButton.appendChild(buttonText);
    //document.getElementById("charCard").appendChild(confirmButton);
    //confirmButton.onclick = function() {
        //var elmnt = document.createElement("li");
        //var textnode = document.createTextNode(newName);
        //var oldName = document.getElementById("charCard");
        //var newName = document.getElementsByClassName("newInput").value
    
        //elmnt.className="nameDisplay"
        //elmnt.appendChild(textnode);
        //oldName.replaceChild(elmnt, oldName.childNodes[0]);
        //var newName = document.getElementsByClassName("newInput").value;
        //var oldName = document.getElementsByClassName("nameDisplay").value;
        //oldName.innerHTML = newName;
        //}

//create cancel button
    //var cancelButton = document.createElement("BUTTON");
    //var buttonText = document.createTextNode("Cancel");
    //cancelButton.className = "cancelButton";
    //cancelButton.appendChild(buttonText);
    //document.getElementById("charCard").appendChild(cancelButton);
    //cancelButton.onclick = function() {
        //document.getElementsByClassName("newInput").style.display = "collapse";
        //document.getElementsByClassName("cancelButton").style.display = "none";
        //document.getElementsByClassName("confirmButton").style.display = "none";
    //}
}


//SUPER HELPFUL TODO LIST SITE!!!
//https://codepen.io/jaballadares/pen/Hwebq