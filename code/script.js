   /* FIRST FORM*/
   // Get the modal
   var modal1 = document.getElementById("form1");
   
   // Get the button that opens the modal
   var button1 = document.getElementById("buttonForm1");
   
   // Get the <span> (x) element that closes the modal
   var span1 = document.getElementsByClassName("close1")[0];
   
   // When the user clicks on the button, open the modal
   button1.onclick = function() {
     modal1.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the modal
   span1.onclick = function() {
     modal1.style.display = "none";
   }
   

   /* SECOND FORM */
   // Get the modal
   var modal2 = document.getElementById("form2");
   
   // Get the button that opens the modal
   var button2 = document.getElementById("buttonForm2");
   
   // Get the <span> (x) element that closes the modal
   var span2 = document.getElementsByClassName("close2")[0];
   
   // When the user clicks on the button, open the modal
   button2.onclick = function() {
     modal2.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the modal
   span2.onclick = function() {
     modal2.style.display = "none";
   }
   