/* FIRST FORM*/
// Show form in html
var modal1 = document.getElementById("form1");

// Get the button that opens the modal
var button1 = document.getElementById("buttonForm1");

// Show the X button that closes the form in html
var span1 = document.getElementsByClassName("close1")[0];

// Click button to open the form
button1.onclick = function() {
    modal1.style.display = "block";
}

// X button that closes the form
span1.onclick = function() {
    modal1.style.display = "none";
}


/* SECOND FORM */
var modal2 = document.getElementById("form2");

var button2 = document.getElementById("buttonForm2");

var span2 = document.getElementsByClassName("close2")[0];

button2.onclick = function() {
    modal2.style.display = "block";
}

span2.onclick = function() {
    modal2.style.display = "none";
}