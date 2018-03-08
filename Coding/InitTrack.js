function loadingStuff () {
    addCloseButtons();
    addEditButton();
    newIdNameEdit();
}

function newPlayerButton() {
    newCharLine();
    addCloseButtons();
    newIdNameEdit();
}

function newIdNameEdit () {
    document.getElementsByClassName("LI").className= "nameDisplay";
}

function addEditButton () {
   // Create an "edit" button and append it to each list item
   var myNodelist = document.getElementsByTagName("LI");
   var i;
   for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Edit");
        span.className = "edit";
        txt.className = "nameDisplay";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    var edit = document.getElementsByClassName("edit");
    var i;
    for (i = 0; i < edit.length; i++) {
        edit[i].onclick = function() {
            var inputBox = document.createElement("input");
            inputBox.className = "newName";
            var oldName = document.getElementsByClassName("nameDisplay").value;
            var newNameDisplay = document.getElementsByClassName("newName").value;
            var t = document.createTextNode(newNameDisplay);
            li.appendChild(t);
            if (newNameDisplay === '') {
                document.getElementById("nameDisplay");
            } else {
                document.getElementById("charCard").appendChild(li);
            }
                document.getElementById("newNameDisplay").value = "";
        }
    }
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
}




//SUPER HELPFUL TODO LIST SITE!!!
//https://codepen.io/jaballadares/pen/Hwebq