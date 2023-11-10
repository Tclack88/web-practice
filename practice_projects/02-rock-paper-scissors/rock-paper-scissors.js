document.addEventListener("DOMContentLoaded", event => {
    console.log("Rock Paper Scissors!");

    const choices = ["rock","paper","scissors"];
    let playAgain = true;

    function getPlayerChoice(){
        let playerSelection;
        let invalidChoice = true;
        while (invalidChoice){
            playerSelection = prompt("Choose (type) Rock, Paper or Scissors: ");
            if (playerSelection){ // Needed because cancelling the prompt gives playerSelection as undefined
                playerSelection = playerSelection.toLowerCase();
                if (playerSelection != "rock" & playerSelection != "paper" & playerSelection != "scissors"){
                    console.log("Not a valid response, type only one of \"rock, paper, scissors\" ");
                }else{
                    invalidChoice = false;
                }
            }
        }
        return playerSelection;
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
        console.log(
            `Your choice: ${playerSelection}
            Computer's choice: ${computerSelection}
            Result: ${result}!`);
    }

    function game(){
        while(playAgain){
            let computerSelection = getcomputerSelection();
            let playerSelection = getPlayerChoice();
            playRound(computerSelection, playerSelection);

            playAgain = confirm("Play again? ");
        }
    }

game();


});