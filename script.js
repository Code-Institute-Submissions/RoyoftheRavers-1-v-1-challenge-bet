// JQuery accordian
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

// The game starts with this button will be this button
let gameStart = document.getElementById("start1");


// When the user clicks the button, the script gathers the choices
gameStart.addEventListener("click", function(){
  
  // Get the user's first name
  let firstName = document.getElementById("first-name");
  // Get the user's last name
  let lastName = document.getElementById("last-name");
  // Get the Amount chosen
  let gameAmount = document.getElementById("amount").value;
  // Get the Prediction chosen
  let prediction1 = document.getElementById("prediction").value;

  if (prediction1 = "Man United") {
      document.getElementById("mb1").innerHTML = firstName + ", you have chosen" + prediction1 + " and are have bet €" + gameAmount + ". Best of luck!";
  };  
});


  // For final modal define variables

  // Use method chaining to update classes based on button click and if statement
