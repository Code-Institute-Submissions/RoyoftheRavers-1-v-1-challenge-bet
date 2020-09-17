// JQuery accordian
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

// The game starts with this button for 'Challenge Friend'
let gameStart = document.getElementById("start1a");

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

  // Create variable to update the modal based on game choices made
  let updateModal = document.getElementById("mb1").innerHTML = `${firstName}, good news, your bet is on!<br> 
  You have chosen ${prediction} to win in the match<br>
  between Man United and Liverpool.<br>
  Your amount staked is ` + `${gameAmount}<br>
  Best of luck!<br><br>
  PS when the match is over you can check the result below:`;
  console.log(updateModal);
});

   // Add match results to local Storage
    localStorage.setItem("match1result", "Man United");
    localStorage.setItem("match2result", "Barcelona");
    localStorage.setItem("match3result", "Draw");
    localStorage.setItem("match4result", "The Field");
    localStorage.setItem("match5result", "Dublin");


    // Game functions

    /*function runGameManUtdLiv(firstName, gameAmount, prediction) {
        document.getElementById("mb1").innerHTML = "<h3>Good news " + name + ", your friend has accepted your challenge, game on!<br>;" +
        "</h3><h3>The amount of your bet is €"+ gameAmount + ".<br> The team you chose to win is " + prediction + "." + "</h3>";
        console.log("Match 1..");
    runGameManUtdLiv();*/
    

    


  // For final modal define variables

  // Use method chaining to update classes based on button click and if statement

  