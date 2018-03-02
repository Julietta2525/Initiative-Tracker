function newPlayerButton() {
    newCharLine();
    addCloseButtons();
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
    } else {
      document.getElementById("charCard").appendChild(li);
    }

    var span = document.createElement("SPAN");
    var closeX = "X";
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}




//SUPER HELPFUL TODO LIST SITE!!!
//https://codepen.io/jaballadares/pen/Hwebq