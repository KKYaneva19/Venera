var location1 = document.getElementById("location");

function getLocation() {
      navigator.geolocation.getCurrentPosition(displayPosition);
 }
  
function displayPosition(position) {
    location1.innerHTML = "Географска ширина: " + position.coords.latitude + 
    "<br>Географска дължина: " + position.coords.longitude;
  }