// JQuery accordian
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

// The game starts with this button will be this button
let gameStart = document.getElementById("start1");


// When the user clicks the button, the script gathers the choices
gameStart.addEventListener("click", function (){
  
  // Get the user's first name
  let firstName = document.getElementById("first-name");
  // Get the user's last name
  let lastName = document.getElementById("last-name");
  // Get the Amount chosen
  let gameAmount = document.getElementById("amount").value;
  // Get the Prediction chosen
  let prediction1 = document.getElementById("prediction").value;

    
   let updateModal = document.getElementById("mb1").innerHTML = ` ${firstName}, you have chosen${prediction1} and are have bet €${gameAmount}. Best of luck!`;
   console.log(updateModal); 
   
   /*var messageTwo = 'Hi ${first-Name}, your team choice is ${prediction1} and your bet is ${gameAmount}';
   console.log(messageTwo);*/
});

    // Game functions

    function runGameManUtdLiv(firstName, gameAmount, prediction) {
        document.getElementById("mb1").innerHTML = "<h3>Good news " + name + ", your friend has accepted your challenge, game on!<br>;" +
        "</h3><h3>The amount of your bet is €"+ gameAmount + ".<br> The team you chose to win is " + prediction + "." + "</h3>";
        console.log("Match 1..");
    }




  // For final modal define variables

  // Use method chaining to update classes based on button click and if statement
