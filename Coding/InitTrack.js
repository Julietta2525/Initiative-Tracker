
function loadingStuff () {
    document.getElementById("nameField").value = '';
}

function checkButton () {
    var x = document.getElementById("nameField").value;
    document.getElementById("slate1").innerHTML = x;
}

function clearNameInput () {
    document.getElementById("nameField").value = "";
}

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
//https://gomakethings.com/adding-a-new-element-to-the-dom-with-vanilla-js/
//https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
//http://www.javascriptkit.com/javatutors/dom2.shtml