/* Show the GPS oordinates in the html  */
var location1 = document.getElementById("location");


/* The geolocation.getCurrentPosition() gets the current position of the device */
function getLocation() {
    navigator.geolocation.getCurrentPosition(displayPosition);
}

/* Gets coordinates of current latitude and longitude */

function displayPosition(position) {
    location1.innerHTML = "Географска ширина: " + position.coords.latitude +
        "<br>Географска дължина: " + position.coords.longitude;
}