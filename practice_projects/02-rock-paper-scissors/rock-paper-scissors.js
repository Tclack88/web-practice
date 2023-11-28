document.addEventListener("DOMContentLoaded", () => {
    // console.log("Rock Paper Scissors!");
    let playerSelection;
    let computerSelection;

    let playBtn = document.querySelector("#play-btn");
    let selectionBtns = document.querySelector("#selection-btns");
    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide");
        selectionBtns.classList.remove("hide");
        // playerSelection = selectionBtns.value;
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
            game();
        } ));

    const choices = ["rock","paper","scissors"];
    let playAgain = true;
    // let response = false;

    function getPlayerChoice(){
        let playerSelection = selectionBtns.value;
        console.log('player has made choice');
        return playerSelection;
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
        // while(playAgain){
        // if (playAgain){
        //     console.log("in game");
        //     computerSelection = getcomputerSelection();
        //     playerSelection = getPlayerChoice();

        //     // let idInterval = setInterval(getPlayerChoice,1000);
        //     // if (playerSelection){
        //     //     console.log("DEBUG: player selection positive, clearing intervalID");
        //     //     clearInterval(idInterval);
        //     // }

        //     // if (playerSelection){
        //     //     clearInterval(idInterval);
        //     //     console.log("playerSelection is true");
        //     //     playRound(computerSelection, playerSelection);
        //     //     playAgain = confirm("Play again? ");
        //     // }
        //     // else{
        //     //     console.log("playerSelection is false");
        //     //     let idInterval = setInterval(getPlayerChoice,1000);
        //     // }
        //     // playRound(computerSelection, playerSelection);
        //     game();
        // }else {
        //     playAgain=false;
        //     return;
        // }
        console.log("in game");
        computerSelection = getcomputerSelection();
        playerSelection = getPlayerChoice();
        playRound(computerSelection, playerSelection);
        selectionBtns.classList.add("hide");
    }

    // game();


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
