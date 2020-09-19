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
    let firstName1 = document.getElementById("first-name1").value;
    console.log(firstName1);
    // Get the user's team choice
    let prediction1 = document.getElementById("prediction1").value;
    // Get the Amount chosen
    let gameAmount1 = document.getElementById("amount1").value;
    //console.log(gameAmountNumber1);

    // Create variable to update the modal based on game choices made
    let updateModal1 = document.getElementById("mb1").innerHTML = `${firstName1}, good news, your bet is on!<br> 
    You have chosen ${prediction1} to win in the match<br>
    between Man United and Liverpool.<br>
    Your amount staked is ` + `${gameAmount1}<br>
    Best of luck!<br><br>
    PS when the match is over you can check the result below:`;
    console.log(updateModal1);
});

// Add match results to local Storage
localStorage.setItem("match1result", "Man United");
localStorage.setItem("match2result", "Barcelona");
localStorage.setItem("match3result", "Draw");
localStorage.setItem("match4result", "The Field");
localStorage.setItem("match5result", "Dublin");

// The result generating starts with clicking the 'See Result' button
let seeResult1 = document.getElementById("start1b");

// When the user clicks the button, script gets results to return
seeResult1.addEventListener("click", function() {

    // Get the user's first name
    let firstName1 = document.getElementById("first-name1").value;

    // Get match results from local Storage
    let result1 = localStorage.getItem("match1result");
    console.log(result1);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction1 = result1) {

        let gameAmount1 = document.getElementById("amount1").value;
        console.log(gameAmount1);
        gameAmount1Slice = gameAmount1.slice(1);
        console.log(gameAmount1Slice);
        console.log(typeof(gameAmount1Slice));
        gameAmount1Number = parseInt(gameAmount1Slice);
        console.log(gameAmount1Number);
        console.log(typeof(gameAmount1Number));
        let updateModalh = document.getElementById("Modal1").innerHTML = `Challenge Bet Result`;
        let updateModal2 = document.getElementById("mb1").innerHTML = `Congratulations ${firstName1}! <br>
        ${prediction1} have won the match against Liverpool,<br><br>
        You have won €${gameAmount1Number * 2}!`;
        console.log(updateModalh);
        console.log(updateModal2);
    };

    // Remove 'See Result' button from second modal
    $("#start1b").remove();

    

});

    // Game functions

    /*function runGameManUtdLiv(firstName, gameAmount, prediction) {
        document.getElementById("mb1").innerHTML = "<h3>Good news " + name + ", your friend has accepted your challenge, game on!<br>;" +
        "</h3><h3>The amount of your bet is €"+ gameAmount + ".<br> The team you chose to win is " + prediction + "." + "</h3>";
        console.log("Match 1..");
    runGameManUtdLiv();*/
    

    


  // For final modal define variables

  // Use method chaining to update classes based on button click and if statement

  