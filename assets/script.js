// JQuery accordian
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
    });
  } );

// Add matches and match results to local Storage
localStorage.setItem("match1", "between Man United and Liverpol.");
localStorage.setItem("match2", "between Real Madrid and Barcelona.");
localStorage.setItem("match3", "between Ireland and England.");
localStorage.setItem("match4", "between Rory McIlroy and The Field.");
localStorage.setItem("match5", "between Dublin and Kerry.");
localStorage.setItem("match1result", "Man United");
localStorage.setItem("match2result", "Barcelona");
localStorage.setItem("match3result", "Draw");
localStorage.setItem("match4result", "The Field");
localStorage.setItem("match5result", "Dublin");

// Match 1: Man United v Liverpool
// The game starts with this button for 'Challenge Friend'
let gameStart = document.getElementById("start1a");

// When the user clicks the button, the script gathers the choices
gameStart.addEventListener("click", function (){

    // Get the user's first name
    let firstName1 = document.getElementById("first-name1").value;
    // Get the user's last name
    let lastName = document.getElementById("last-name").value;
    // If statement to validate empty name fields
    if(firstName1 === "") {
        alert('Please enter your first name');
        return false;

    }  else if(lastName === "") {
        alert('Please enter your last name');
        return false;

    }   else { 
    // Open modal
    $('#Modal1Match1').modal('show');
    // Get the user's team choice
    let prediction1 = document.getElementById("prediction1").value;
    // Get the Amount chosen
    let gameAmount1 = document.getElementById("amount1").value;
    //console.log(gameAmountNumber1);
    // Get the match
    let match1 = localStorage.getItem("match1");

    // Create variable to update the modal based on game choices made
    let updateModal1 = document.getElementById("mb1").innerHTML = `${firstName1}, good news, your bet is on! <i class="fas fa-check-circle font-blue"></i><br> 
    You have chosen ${prediction1} to win in the match<br>
    ${match1}<br>
    <br>
    Your amount staked is ` + `${gameAmount1}<br>
    Best of luck! <i class="fas fa-handshake font-handshake"></i><br><br>
    PS when the match is over you can check the result below <i class="fas fa-caret-square-down"></i>`;
    console.log(updateModal1);
    }
});  

// The result generating starts with clicking the 'See Result' button
let seeResult1 = document.getElementById("start1b");

// When the user clicks the button, script gets results to return
seeResult1.addEventListener("click", function() {

    // Remove 'See Result' button from second modal
    $("#start1b").remove();
    
    // Get the user's first name and last name
    let firstName1 = document.getElementById("first-name1").value;

    // Get the user's team choice
    let prediction1 = document.getElementById("prediction1").value;
    console.log(prediction1);

    // Get match results from local Storage
    let result1 = localStorage.getItem("match1result");
    console.log(result1);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction1 === result1) {
        // Get amount and convert to number
        let gameAmount1 = document.getElementById("amount1").value;
        gameAmount1Slice = gameAmount1.slice(1);
        gameAmount1Number = parseInt(gameAmount1Slice);
        // Get the match
        let match1 = localStorage.getItem("match1");
        // Update HTML in modal
        let updateModalh = document.getElementById("Modal1").innerHTML = `Challenge Bet Result`;
        let updateModal2 = document.getElementById("mb1").innerHTML = `Congratulations ${firstName1}! <i class="fas fa-trophy font-gold"></i><br><br>
        ${result1} have won the match<br>
        ${match1}<br><br>
        You have won €${gameAmount1Number * 2}! <i class="fas fa-money-bill-wave font-money"></i>`;
        console.log(updateModalh);
        console.log(updateModal2);

    } else if(result1 === "Draw") {
        // Get amount and convert to number
        let gameAmount1 = document.getElementById("amount1").value;
        gameAmount1Slice = gameAmount1.slice(1);
        gameAmount1Number = parseInt(gameAmount1Slice);
        // Get the match
        let match1 = localStorage.getItem("match1");
        // Update HTML in modal
        let updateModalh = document.getElementById("Modal1").innerHTML = `Challenge Bet Result`;
        let updateModal2 = document.getElementById("mb1").innerHTML = `Close call ${firstName1}! <br><br>
        It ended in a draw in the match<br>
        ${match1} <i class="fas fa-hourglass font-blue"><br><br>
        You have been refunded €${gameAmount1Number} in game credit to use on any other challenge bets.<br>
        Good luck in your next challenge bet!`;
        console.log(updateModalh);
        console.log(updateModal2); 
    } else {
        // Get amount and convert to number
        let gameAmount1 = document.getElementById("amount1").value;
        gameAmount1Slice = gameAmount1.slice(1);
        gameAmount1Number = parseInt(gameAmount1Slice);
        // Get the match
        let match1 = localStorage.getItem("match1");
        // Update HTML in modal
        let updateModalh = document.getElementById("Modal1").innerHTML = `Challenge Bet Result`
        let updateModal2 = document.getElementById("mb1").innerHTML = `Commiserations ${firstName1} <i class="fas fa-frown-open font-handshake"></i> <br><br>
        ${result1} have won the match<br>
        ${match1}<br><br>
        Better luck next time.`;
        console.log(updateModalh);
        console.log(updateModal2);
    }  
});

// Match 2: Real Madrid v Barcelona
// The game starts with this button for 'Challenge Friend'
let gameStart2 = document.getElementById("start2a");

// When the user clicks the button, the script gathers the choices
gameStart2.addEventListener("click", function (){
  
    // Get the user's first name and last name
    let firstName2 = document.getElementById("first-name2").value;
    let lastName2 = document.getElementById("last-name2").value;
    // If statement to validate empty name fields
    if(firstName2 === "") {
        alert('Please enter your first name');
        return false;

    }  else if(lastName2 === "") {
        alert('Please enter your last name');
        return false;

    }   else {
    // Open modal
    $('#Modal1Match2').modal('show'); 
    // Get the user's team choice
    let prediction2 = document.getElementById("prediction2").value;
    // Get the Amount chosen
    let gameAmount2 = document.getElementById("amount2").value;
    //console.log(gameAmountNumber1);
    // Get the match
    let match2 = localStorage.getItem("match2");

    // Create variable to update the modal based on game choices made
    let updateModal2 = document.getElementById("mb2").innerHTML = `${firstName2}, good news, your bet is on! <i class="fas fa-check-circle font-blue"></i><br> 
    You have chosen ${prediction2} to win in the match<br>
    ${match2}<br>
    <br>
    Your amount staked is ` + `${gameAmount2}<br>
    Best of luck! <i class="fas fa-handshake font-handshake"></i><br><br>
    PS when the match is over you can check the result below <i class="fas fa-caret-square-down"></i>`;
    console.log(updateModal2);
    }
});

// The result generating starts with clicking the 'See Result' button
let seeResult2 = document.getElementById("start2b");

// When the user clicks the button, script gets results to return
seeResult2.addEventListener("click", function() {

    // Remove 'See Result' button from second modal
    $("#start2b").remove();
    
    // Get the user's first name
    let firstName2 = document.getElementById("first-name2").value;

    // Get the user's team choice
    let prediction2 = document.getElementById("prediction2").value;
    console.log(prediction2);

    // Get match results from local Storage
    let result2 = localStorage.getItem("match2result");
    console.log(result2);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction2 === result2) {
        // Get amount and convert to number
        let gameAmount2 = document.getElementById("amount2").value;
        gameAmount2Slice = gameAmount2.slice(1);
        gameAmount2Number = parseInt(gameAmount2Slice);
        // Get the match
        let match2 = localStorage.getItem("match2");
        // Update HTML in modal
        let updateModal2 = document.getElementById("Modal2").innerHTML = `Challenge Bet Result`;
        let updateModal2a = document.getElementById("mb2").innerHTML = `Congratulations ${firstName2}! <i class="fas fa-trophy font-gold"></i> <br><br>
        ${result2} have won the match<br>
        ${match2}<br><br>
        You have won €${gameAmount2Number * 2}! <i class="fas fa-money-bill-wave font-money"></i>`;
        console.log(updateModal2);
        console.log(updateModal2a);

    } else if(result2 === "Draw") {
        // Get amount and convert to number
        let gameAmount2 = document.getElementById("amount2").value;
        gameAmount2Slice = gameAmount2.slice(1);
        gameAmount2Number = parseInt(gameAmount2Slice);
        // Get the match
        let match2 = localStorage.getItem("match2");
        // Update HTML in modal
        let updateModal2 = document.getElementById("Modal2").innerHTML = `Challenge Bet Result`;
        let updateModal2a = document.getElementById("mb2").innerHTML = `Close call ${firstName2}! <br><br>
        It ended in a draw in the match<br>
        ${match2} <i class="fas fa-hourglass font-blue"><br><br>
        You have been refunded €${gameAmount2Number} in game credit<br> 
        to use on any other challenge bets.<br>
        Good luck in your next challenge bet!`;
        console.log(updateModal2);
        console.log(updateModal2a); 
    } else {
        // Get amount and convert to number
        let gameAmount2 = document.getElementById("amount2").value;
        gameAmount2Slice = gameAmount2.slice(1);
        gameAmount2Number = parseInt(gameAmount2Slice);
        // Get the match
        let match2 = localStorage.getItem("match2");
        // Update HTML in modal
        let updateModal2 = document.getElementById("Modal2").innerHTML = `Challenge Bet Result`
        let updateModal2a = document.getElementById("mb2").innerHTML = `Commiserations ${firstName2} <i class="fas fa-frown-open font-handshake"></i> <br><br>
        ${result2} have won the match<br>
        ${match2}<br><br>
        Better luck next time.`;
        console.log(updateModal2);
        console.log(updateModal2a);
    }  
});

// Match 3: Ireland v England
// The game starts with this button for 'Challenge Friend'
let gameStart3 = document.getElementById("start3a");

// When the user clicks the button, the script gathers the choices
gameStart3.addEventListener("click", function (){
  
    // Get the user's first name and last name
    let firstName3 = document.getElementById("first-name3").value;
    let lastName3 = document.getElementById("last-name3").value;
    // If statement to validate empty name fields
    if(firstName3 === "") {
        alert('Please enter your first name');
        return false;

    }  else if(lastName3 === "") {
        alert('Please enter your last name');
        return false;

    }   else {
    // Open modal
    $('#Modal1Match3').modal('show'); 
    // Get the user's team choice
    let prediction3 = document.getElementById("prediction3").value;
    // Get the Amount chosen
    let gameAmount3 = document.getElementById("amount3").value;
    // Get the match
    let match3 = localStorage.getItem("match3");

    // Create variable to update the modal based on game choices made
    let updateModal3a = document.getElementById("mb3").innerHTML = `${firstName3}, good news, your bet is on! <i class="fas fa-check-circle font-blue"></i><br><br> 
    You have chosen ${prediction3} to win in the match<br>
    ${match3}<br>
    <br>
    Your amount staked is ` + `${gameAmount3}<br>
    Best of luck! <i class="fas fa-handshake font-handshake"></i><br><br>
    PS when the match is over you can check the result below <i class="fas fa-caret-square-down"></i>`;
    console.log(updateModal3a);
    }
});

// The result generating starts with clicking the 'See Result' button
let seeResult3 = document.getElementById("start3b");

// When the user clicks the button, script gets results to return
seeResult3.addEventListener("click", function() {

    // Remove 'See Result' button from second modal
    $("#start3b").remove();
    
    // Get the user's first name
    let firstName3 = document.getElementById("first-name3").value;

    // Get the user's team choice
    let prediction3 = document.getElementById("prediction3").value;
    console.log(prediction3);

    // Get match results from local Storage
    let result3 = localStorage.getItem("match3result");
    console.log(result3);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction3 === result3) {
        // Get amount and convert to number
        let gameAmount3 = document.getElementById("amount3").value;
        gameAmount3Slice = gameAmount3.slice(1);
        gameAmount3Number = parseInt(gameAmount3Slice);
        // Get the match
        let match3 = localStorage.getItem("match3");
        // Update HTML in modal
        let updateModal3b = document.getElementById("Modal3").innerHTML = `Challenge Bet Result`;
        let updateModal3c = document.getElementById("mb3").innerHTML = `Congratulations ${firstName3}! <i class="fas fa-trophy font-gold"></i> <br><br>
        ${result3} have won the match<br>
        ${match3}<br><br>
        You have won €${gameAmount3Number * 2}! <i class="fas fa-money-bill-wave font-money"></i>`;
        console.log(updateModal3b);
        console.log(updateModal3c);

    } else if(result3 === "Draw") {
        // Get amount and convert to number
        let gameAmount3 = document.getElementById("amount3").value;
        gameAmount3Slice = gameAmount3.slice(1);
        gameAmount3Number = parseInt(gameAmount3Slice);
        // Get the match
        let match3 = localStorage.getItem("match3");
        // Update HTML in modal
        let updateModal3b = document.getElementById("Modal3").innerHTML = `Challenge Bet Result`;
        let updateModal3c = document.getElementById("mb3").innerHTML = `Close call ${firstName3}! <br><br>
        It ended in a draw in the match<br>
        ${match3} <i class="fas fa-hourglass font-blue"></i><br><br>
        You have been refunded €${gameAmount3Number} in game credit<br>
        to use on any other challenge bets.<br><br>
        Good luck in your next challenge bet!`;
        console.log(updateModal3b);
        console.log(updateModal3c); 
    } else {
        // Get amount and convert to number
        let gameAmount3 = document.getElementById("amount3").value;
        gameAmount3Slice = gameAmount3.slice(1);
        gameAmount3Number = parseInt(gameAmount3Slice);
        // Get the match
        let match3 = localStorage.getItem("match3");
        // Update HTML in modal
        let updateModal3b = document.getElementById("Modal3").innerHTML = `Challenge Bet Result`
        let updateModal3c = document.getElementById("mb3").innerHTML = `Commiserations ${firstName3} <i class="fas fa-frown-open font-handshake"></i> <br><br>
        ${result3} have won the match<br>
        ${match3}<br><br>
        Better luck next time.`;
        console.log(updateModal3b);
        console.log(updateModal3c);
    } 
    });

// Match 4: Rory McIlroy v The Field
// The game starts with this button for 'Challenge Friend'
let gameStart4 = document.getElementById("start4a");

// When the user clicks the button, the script gathers the choices
gameStart4.addEventListener("click", function (){
  
    // Get the user's first name and last name
    let firstName4 = document.getElementById("first-name4").value;
    let lastName4 = document.getElementById("last-name4").value;
    // If statement to validate empty name fields
    if(firstName4 === "") {
        alert('Please enter your first name');
        return false;

    }  else if(lastName4 === "") {
        alert('Please enter your last name');
        return false;

    }   else {
    // Open modal
    $('#Modal1Match4').modal('show'); 
    // Get the user's team choice
    let prediction4 = document.getElementById("prediction4").value;
    // Get the Amount chosen
    let gameAmount4 = document.getElementById("amount4").value;
    // Get the match
    let match4 = localStorage.getItem("match4");

    // Create variable to update the modal based on game choices made
    let updateModal4a = document.getElementById("mb4").innerHTML = `${firstName4}, good news, your bet is on! <i class="fas fa-check-circle font-blue"></i><br><br> 
    You have chosen ${prediction4} to win the US Open<br>
    ${match4}<br>
    <br>
    Your amount staked is ` + `${gameAmount4}<br>
    Best of luck! <i class="fas fa-handshake font-handshake"></i><br><br>
    PS when the match is over you can check the result below <i class="fas fa-caret-square-down"></i>`;
    console.log(updateModal4a);
    }
});

// The result generating starts with clicking the 'See Result' button
let seeResult4 = document.getElementById("start4b");

// When the user clicks the button, script gets results to return
seeResult4.addEventListener("click", function() {

    // Remove 'See Result' button from second modal
    $("#start4b").remove();
    
    // Get the user's first name
    let firstName4 = document.getElementById("first-name4").value;

    // Get the user's team choice
    let prediction4 = document.getElementById("prediction4").value;
    console.log(prediction4);

    // Get match results from local Storage
    let result4 = localStorage.getItem("match4result");
    console.log(result4);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction4 === result4) {
        // Get amount and convert to number
        let gameAmount4 = document.getElementById("amount4").value;
        gameAmount4Slice = gameAmount4.slice(1);
        gameAmount4Number = parseInt(gameAmount4Slice);
        // Get the match
        let match4 = localStorage.getItem("match4");
        // Update HTML in modal
        let updateModal4b = document.getElementById("Modal4").innerHTML = `Challenge Bet Result`;
        let updateModal4c = document.getElementById("mb4").innerHTML = `Congratulations ${firstName4}! <i class="fas fa-trophy font-gold"></i> <br><br>
        Dustin Johnson has won the US Open,<br>
        which is a win for "The Field" in the match<br>
        ${match4}<br><br>
        You have won €${gameAmount4Number * 2}! <i class="fas fa-money-bill-wave font-money"></i>`;
        console.log(updateModal4b);
        console.log(updateModal4c);

    } else {
        // Get amount and convert to number
        let gameAmount4 = document.getElementById("amount4").value;
        gameAmount4Slice = gameAmount4.slice(1);
        gameAmount4Number = parseInt(gameAmount4Slice);
        // Get the match
        let match4 = localStorage.getItem("match4");
        // Update HTML in modal
        let updateModal4b = document.getElementById("Modal4").innerHTML = `Challenge Bet Result`
        let updateModal4c = document.getElementById("mb4").innerHTML = `Commiserations ${firstName4} <i class="fas fa-frown-open font-handshake"></i> <br><br>
        Dustin Johnson has won the US Open,<br>
        which is a win for "The Field" in the match<br>
        ${match4}<br><br>
        Better luck next time.`;
        console.log(updateModal4b);
        console.log(updateModal4c);
    } 
    });

// Match 5: Dublin v Kerry
// The game starts with this button for 'Challenge Friend'
let gameStart5 = document.getElementById("start5a");

// When the user clicks the button, the script gathers the choices
gameStart5.addEventListener("click", function (){
  
    // Get the user's first name and last name
    let firstName5 = document.getElementById("first-name5").value;
    let lastName5 = document.getElementById("last-name5").value;
    // If statement to validate empty name fields
    if(firstName5 === "") {
        alert('Please enter your first name');
        return false;

    }  else if(lastName5 === "") {
        alert('Please enter your last name');
        return false;

    }   else {
    // Open modal
    $('#Modal1Match5').modal('show'); 
    // Get the user's team choice
    let prediction5 = document.getElementById("prediction5").value;
    // Get the Amount chosen
    let gameAmount5 = document.getElementById("amount5").value;
    // Get the match
    let match5 = localStorage.getItem("match5");

    // Create variable to update the modal based on game choices made
    let updateModal5a = document.getElementById("mb5").innerHTML = `${firstName5}, good news, your bet is on! <i class="fas fa-check-circle font-blue"></i><br><br> 
    You have chosen ${prediction5} to win in the match<br>
    ${match5}<br>
    <br>
    Your amount staked is ` + `${gameAmount5}<br>
    Best of luck! <i class="fas fa-handshake font-handshake"></i><br><br>
    PS when the match is over you can check the result below <i class="fas fa-caret-square-down"></i>`;
    console.log(updateModal5a);
    }
});

// The result generating starts with clicking the 'See Result' button
let seeResult5 = document.getElementById("start5b");

// When the user clicks the button, script gets results to return
seeResult5.addEventListener("click", function() {

    // Remove 'See Result' button from second modal
    $("#start5b").remove();
    
    // Get the user's first name
    let firstName5 = document.getElementById("first-name5").value;

    // Get the user's team choice
    let prediction5 = document.getElementById("prediction5").value;
    console.log(prediction5);

    // Get match results from local Storage
    let result5 = localStorage.getItem("match5result");
    console.log(result5);

    // Return result outcome by updating Modal Header/Content/Footer based on prediction
    if(prediction5 === result5) {
        // Get amount and convert to number
        let gameAmount5 = document.getElementById("amount5").value;
        gameAmount5Slice = gameAmount5.slice(1);
        gameAmount5Number = parseInt(gameAmount5Slice);
        // Get the match
        let match5 = localStorage.getItem("match5");
        // Update HTML in modal
        let updateModal5b = document.getElementById("Modal5").innerHTML = `Challenge Bet Result`;
        let updateModal5c = document.getElementById("mb5").innerHTML = `Congratulations ${firstName5}! <i class="fas fa-trophy font-gold"></i> <br><br>
        ${result5} have won the match<br>
        ${match5}<br><br>
        You have won €${gameAmount5Number * 2}! <i class="fas fa-money-bill-wave font-money"></i>`;
        console.log(updateModal5b);
        console.log(updateModal5c);

    } else if(result5 === "Draw") {
        // Get amount and convert to number
        let gameAmount5 = document.getElementById("amount5").value;
        gameAmount5Slice = gameAmount5.slice(1);
        gameAmount5Number = parseInt(gameAmount5Slice);
        // Get the match
        let match5 = localStorage.getItem("match5");
        // Update HTML in modal
        let updateModal5b = document.getElementById("Modal5").innerHTML = `Challenge Bet Result`;
        let updateModal5c = document.getElementById("mb5").innerHTML = `Close call ${firstName5}! <br><br>
        It ended in a draw in the match<br>
        ${match5} <i class="fas fa-hourglass font-blue"><br><br>
        You have been refunded €${gameAmount5Number} in game credit to use on any other challenge bets.<br>
        Good luck in your next challenge bet!`;
        console.log(updateModal5b);
        console.log(updateModal5c); 
    } else {
        // Get amount and convert to number
        let gameAmount5 = document.getElementById("amount5").value;
        gameAmount5Slice = gameAmount5.slice(1);
        gameAmount5Number = parseInt(gameAmount5Slice);
        // Get the match
        let match5 = localStorage.getItem("match5");
        // Update HTML in modal
        let updateModal5b = document.getElementById("Modal5").innerHTML = `Challenge Bet Result`
        let updateModal5c = document.getElementById("mb5").innerHTML = `Commiserations ${firstName5} <i class="fas fa-frown-open font-handshake"></i> <br><br>
        ${result5} have won the match<br>
        ${match5}<br><br>
        Better luck next time.`;
        console.log(updateModal5b);
        console.log(updateModal5c);
    } 
    });