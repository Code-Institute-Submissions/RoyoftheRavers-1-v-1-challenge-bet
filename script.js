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
  let firstName = document.getElementById("first-name1").value;
  console.log(firstName);
  // Get the user's team choice
  let prediction = document.getElementById("prediction1").value;
  // Get the Amount chosen
  let gameAmount = document.getElementById("amount1").value;
  console.log(gameAmount);
  let updateModal = document.getElementById("mb1").innerHTML = `${firstName}, good news, your bet is on!<br> 
  You have chosen ${prediction} to win in the match<br>
  between Man United and Liverpool.<br>
  Your amount staked is ` + `${gameAmount}<br>
  Best of luck!<br><br>
  PS when the match is over you can check the result below:`;
  console.log(updateModal);
  // Get the user's last name
  /* let lastName = document.getElementById("last-name").value;
  // Get the Amount chosen
  let gameAmount = document.getElementById("amount").value;
  // Get the Prediction chosen
  let prediction1 = document.getElementById("prediction").value;

  

    
   let updateModal = document.getElementById("mb1").innerHTML = ` ${firstName}, you have chosen${prediction1} and have bet €${gameAmount}. Best of luck!`;
   console.log(updateModal); 
   
   /*var messageTwo = 'Hi ${first-Name}, your team choice is ${prediction1} and your bet is ${gameAmount}';
   console.log(messageTwo);*/
});

    // Game functions

    /*function runGameManUtdLiv(firstName, gameAmount, prediction) {
        document.getElementById("mb1").innerHTML = "<h3>Good news " + name + ", your friend has accepted your challenge, game on!<br>;" +
        "</h3><h3>The amount of your bet is €"+ gameAmount + ".<br> The team you chose to win is " + prediction + "." + "</h3>";
        console.log("Match 1..");
    runGameManUtdLiv();*/
    

    


  // For final modal define variables

  // Use method chaining to update classes based on button click and if statement

  localStorage.setItem("match1result", "Man United");