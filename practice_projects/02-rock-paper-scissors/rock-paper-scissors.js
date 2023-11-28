document.addEventListener("DOMContentLoaded", event => {
    // console.log("Rock Paper Scissors!");

    let playerSelection;

    let playBtn = document.querySelector("#play-btn");
    let selectionBtns = document.querySelector("#selection-btns");
    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide");
        selectionBtns.classList.remove("hide");

        // let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
        // playerChoices.forEach((choice) => 
        //     choice.addEventListener('click', () =>{
        //         selectionBtns.value = choice.id;
        //     } ));

    });

    let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
    playerChoices.forEach((choice) => 
        choice.addEventListener('click', () =>{
            selectionBtns.value = choice.id;
        } ));

    const choices = ["rock","paper","scissors"];
    let playAgain = true;
    // let response = false;

    function getPlayerChoice(){
        console.log("in player selection");
        let playerSelection;
        // let invalidChoice = true;

        // let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
        // playerChoices.forEach((choice) => 
        //     choice.addEventListener('click', () =>{
        //         selectionBtns.value = choice.id;
        //     } ));
        
        // while (!response){
        //     let timeoutID = setTimeout(() =>{
        //         response=checkResponse()
        //         clearInterval(timeoutID);
        //     }
        //         ,5000);
        //     console.log("player still choosing");
        // };
        // console.log(`checking response: ${response}`);
        // function waitThenContinue(){
        //     if (!response){
        //         console.log(`in wait/Continue: !response is ${!response}`);
        //         response = checkResponse();
        //     }else{
        //         console.log(`in wait/Continue: !response is ${!response}`);
        //         setTimeout(waitThenContinue,1000);
        //     }
        // }
        // waitThenContinue();

        // console.log(`checking response 2: ${response}`);



        console.log('player has made choice');
        playerSelection = selectionBtns.value;
        // return playerSelection;


        // playerSelection = prompt("Choose (type) Rock, Paper or Scissors: ");
    }

    // function checkResponse() {
    //     if (selectionBtns.value) return true;
    //     return false;
    //     // else window.setTimeout(checkResponse,500);
    // }

    let getcomputerSelection = () => choices[Math.floor(Math.random()*choices.length)]

    function playRound(computerSelection, playerSelection){
        let result;
        if (playerSelection == "rock"){
            switch (computerSelection){
                case "rock":
                    result = "draw";
                    break;
                case "paper":
                    result = "lose"
                    break;
                case "scissors":
                    result = "win"
            }
        } else if (playerSelection == "paper"){
            switch (computerSelection){
                case "rock":
                    result = "win";
                    break;
                case "paper":
                    result = "draw";
                    break;
                case "scissors":
                    result = "lose";
            }
        } else {
            switch(computerSelection){
                case "rock":
                    result = "lose";
                    break;
                case "paper":
                    result = "win";
                    break;
                case "scissors":
                    result = "draw";
            }
        }
        // console.log(
        //     `Your choice: ${playerSelection}
        //     Computer's choice: ${computerSelection}
        //     Result: ${result}!`);
        alert(
            `Your choice: ${playerSelection}
            Computer's choice: ${computerSelection}
            Result: ${result}!`);
    }

    function game(){
        while(playAgain){
            console.log("in game");
            let computerSelection = getcomputerSelection();
            // let playerSelection = getPlayerChoice();

            let idInterval = setInterval(getPlayerChoice,1000);
            if (playerSelection){
                clearInterval(idInterval);
            }

            // if (playerSelection){
            //     clearInterval(idInterval);
            //     console.log("playerSelection is true");
            //     playRound(computerSelection, playerSelection);
            //     playAgain = confirm("Play again? ");
            // }
            // else{
            //     console.log("playerSelection is false");
            //     let idInterval = setInterval(getPlayerChoice,1000);
            // }
            // playRound(computerSelection, playerSelection);

        }
    }

    game();


});

// let playBtn = document.querySelector("#play-btn");
// let selectionBtns = document.querySelector("#selection-btns");
// playBtn.addEventListener("click", () => {
//     playBtn.classList.add("hide");
//     selectionBtns.classList.remove("hide");
//     // game();

//     let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
//     playerChoices.forEach((choice) => 
//         choice.addEventListener('click', () =>{
//             selectionBtns.value = choice.id;
//         } ));

// });
