document.addEventListener("DOMContentLoaded", event => {
    // console.log("Rock Paper Scissors!");


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

    const choices = ["rock","paper","scissors"];
    let playAgain = true;
    let response = false;

    function getPlayerChoice(){
        console.log("in player selection");
        let playerSelection;
        // let invalidChoice = true;

        let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
        playerChoices.forEach((choice) => 
            choice.addEventListener('click', () =>{
                selectionBtns.value = choice.id;
            } ));
        
        response = checkResponse();
        if (response){
            playerSelection = selectionBtns.value;
            return playerSelection;
        };

        // playerSelection = prompt("Choose (type) Rock, Paper or Scissors: ");
    }

    function checkResponse() {
        if (selectionBtns.value) return true;
        else window.setTimeout(checkResponse,500);
    }

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
            let playerSelection = getPlayerChoice();
            playRound(computerSelection, playerSelection);

            playAgain = confirm("Play again? ");
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
