document.addEventListener("DOMContentLoaded", () => {
    // console.log("Rock Paper Scissors!");
    let playerSelection;
    let computerSelection;

    let playBtn = document.querySelector("#play-btn");
    let selectionBtns = document.querySelector("#selection-btns");
    playBtn.addEventListener("click", () => {
        playBtn.classList.add("hide");
        selectionBtns.classList.remove("hide");
    });

    let playerChoices = document.querySelectorAll("#rock, #paper, #scissors");
    playerChoices.forEach((choice) => 
        choice.addEventListener('click', () =>{
            selectionBtns.value = choice.id;
            game();
        } ));

    const choices = ["rock","paper","scissors"];
    let playAgain = true;

    function getPlayerChoice(){
        let playerSelection = selectionBtns.value;
        console.log('player has made choice');
        return playerSelection;
    }

    function addRow(results){
        console.log(results);
        let table = document.querySelector("#history");
        let row = document.createElement("tr");

        let computer = results[0];
        let player = results[1];
        let res = results[2];

        let c1 = document.createElement("td");
        c1.innerText = computer;
        let c2 = document.createElement("td");
        c2.innerText = player;
        let c3 = document.createElement("td");
        c3.innerText = res;

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);

        console.log(computer, player, res)

        table.appendChild(row);
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

        let gameResult = [playerSelection, computerSelection,result];
        return gameResult;

    }

    function checkPlayAgain(){
        let gameTable = document.querySelector('#history');
        let tableLength = gameTable.rows.length;
        console.log(tableLength);
        if (tableLength >=5){
            console.log('according to playagain, tablelength is >=5');
            return false;
        }
        return true;

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
        let gameResult = playRound(computerSelection, playerSelection);
        addRow(gameResult);

        let resultText = document.querySelector("#results");

        
        playAgain = checkPlayAgain();
        console.log(`playAgain result is ${playAgain}`);
        if (playAgain){

            resultText.textContent = (
                `Your choice: ${gameResult[0]}
                Computer's choice: ${gameResult[1]}
                Result: ${gameResult[1]}!`);
        }else{
            selectionBtns.classList.add("hide");
            resultText.textContent = '5 rounds complete';
        }
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
