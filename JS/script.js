/* First form */
// Show form in html
var modal1 = document.getElementById("form-one");

// Get the button that opens the modal
var button1 = document.getElementById("button-form-one");

// Show the (x) button that closes the form in html
var span1 = document.getElementsByClassName("close-one")[0];

// Click button to open the form
button1.onclick = function() {
    modal1.style.display = "block";
}

// (x) button that closes the form
span1.onclick = function() {
    modal1.style.display = "none";
}


/* Second form */
var modal2 = document.getElementById("form-two");

var button2 = document.getElementById("button-form-two");

var span2 = document.getElementsByClassName("close-two")[0];

button2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}